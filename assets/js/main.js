// First-touch capture. Runs on every page, before any navigation, so the quote
// form can report where the session actually started. Social traffic arrives by
// typing the burned-in CTA URL: no referrer, no campaign param, landing on "/".
// Reading attribution at contact.html alone would log every such lead "direct".
(() => {
  try {
    if (sessionStorage.getItem("tk_first")) return;
    let ref = "";
    if (document.referrer && document.referrer.indexOf(location.host) === -1) ref = document.referrer;
    sessionStorage.setItem("tk_first", JSON.stringify({
      lp: location.pathname + location.search,
      ref: ref,
      q: new URLSearchParams(location.search).get("source") || ""
    }));
  } catch (e) {}
})();

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear().toString();

  // Video fallback: if a <video> fails to load (missing file, bad format),
  // replace it with its poster image so users see the still frame instead
  // of a broken player. Keeps product pages clean when the MP4 assets are
  // not yet uploaded. Handles three patterns:
  //   1. <video src="..." poster="..."> — error event fires on load
  //   2. <video><source src="..."></video> — source child error bubbles
  //   3. <video preload="none"><source></video> — no load until play;
  //      we HEAD-probe the source URL to detect 404 early
  const swapVideoToPoster = (video) => {
    const poster = video.getAttribute("poster");
    if (poster) {
      const img = document.createElement("img");
      img.src = poster;
      img.alt = video.getAttribute("aria-label") || "Product video preview";
      img.loading = "lazy";
      img.decoding = "async";
      img.className = (video.className || "") + " video-poster-fallback";
      img.style.width = "100%";
      img.style.height = "auto";
      img.style.display = "block";
      video.replaceWith(img);
      return;
    }
    // No poster: hide the entire video section (including the "Video"
    // heading) so there's no orphan h2. Prefer the outermost container
    // that groups the heading + the video.
    const wrap = video.closest(".product-video, .video-section");
    if (wrap) {
      wrap.style.display = "none";
      return;
    }
    const innerWrap = video.closest(".video-frame, .product-video-wrap");
    if (innerWrap) innerWrap.style.display = "none";
    else video.style.display = "none";
  };
  document.querySelectorAll("video").forEach((video) => {
    video.addEventListener("error", () => swapVideoToPoster(video), { once: true });
    video.querySelectorAll("source").forEach((s) => {
      s.addEventListener("error", () => swapVideoToPoster(video), { once: true });
    });
    if (video.error) {
      swapVideoToPoster(video);
      return;
    }
    // preload="none" + <source> child: HEAD-probe to catch missing files
    // before the user clicks play. Only probe same-origin URLs.
    if (video.preload === "none") {
      const firstSrc = video.querySelector("source")?.src || video.src;
      if (firstSrc && new URL(firstSrc, location.href).origin === location.origin) {
        fetch(firstSrc, { method: "HEAD" })
          .then((r) => { if (!r.ok) swapVideoToPoster(video); })
          .catch(() => swapVideoToPoster(video));
      }
    }
  });

  // Hero video: some environments (OS reduced-motion, battery/energy saver)
  // suppress autoplay even for muted video. A scripted muted play() is
  // allowed, so nudge it after load and once more on first interaction.
  const heroVideo = document.querySelector(".hero-video");
  if (heroVideo) {
    const nudge = () => { if (heroVideo.paused) heroVideo.play().catch(() => {}); };
    nudge();
    setTimeout(nudge, 1500);
    document.addEventListener("pointerdown", nudge, { once: true });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // Header shrink on scroll
  const header = document.querySelector(".site-header");
  if (header) {
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          header.classList.toggle("header-scrolled", window.scrollY > 60);
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // Scroll reveal (supports .reveal and .reveal-stagger)
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("revealed"); }),
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach((el) => {
      // Already in view on load (e.g. shorter-hero pages) -> show immediately so nothing
      // sits hidden above the fold; only animate what starts fully below the fold.
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("revealed");
      else obs.observe(el);
    });
  } else {
    revealEls.forEach((el) => el.classList.add("revealed"));
  }

  // Cursor glow (desktop only)
  const glow = document.getElementById("cursorGlow");
  if (glow && window.matchMedia("(pointer: fine)").matches) {
    let raf;
    document.addEventListener("mousemove", (e) => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
      });
    });
  } else if (glow) {
    glow.remove();
  }

  // Animated stat counters
  const counters = document.querySelectorAll("[data-count]");
  if (counters.length && "IntersectionObserver" in window) {
    const countObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          const suffix = el.dataset.suffix || "";
          const duration = 1600;
          const start = performance.now();
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(target * eased) + suffix;
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          countObs.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => countObs.observe(el));
  }

  // Mobile menu toggle
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.classList.toggle("is-active");
    });
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("nav-open");
        toggle.classList.remove("is-active");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Site search — button injected into the header; index lazy-loaded from
  // /search-index.json on first open (regen via _scripts/gen_search_index.py)
  (() => {
    const headerInner = document.querySelector(".site-header-inner");
    if (!headerInner || document.getElementById("sbSearchBtn")) return;
    const btn = document.createElement("button");
    btn.id = "sbSearchBtn";
    btn.className = "site-search-btn";
    btn.setAttribute("aria-label", "Search the site");
    btn.setAttribute("aria-haspopup", "dialog");
    btn.setAttribute("aria-expanded", "false");
    btn.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>';
    headerInner.insertBefore(btn, headerInner.querySelector(".nav-toggle"));

    let overlay = null, input = null, list = null, idx = null, isOpen = false;
    const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

    const build = () => {
      overlay = document.createElement("div");
      overlay.className = "search-overlay";
      overlay.hidden = true;
      overlay.innerHTML =
        '<div class="search-panel" role="dialog" aria-modal="true" aria-label="Site search">' +
        '<input type="search" class="search-input" placeholder="Search machines, guides, shows&hellip;" autocomplete="off" aria-label="Search query">' +
        '<div class="search-results"></div>' +
        '<p class="search-hint"><kbd>Esc</kbd> to close &middot; <kbd>Enter</kbd> opens the first result</p></div>';
      document.body.appendChild(overlay);
      input = overlay.querySelector(".search-input");
      list = overlay.querySelector(".search-results");
      overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
      input.addEventListener("input", () => render(input.value));
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") { const a = list.querySelector("a"); if (a) location.href = a.href; }
      });
      // Focus trap: aria-modal="true" needs real containment so Tab can't reach the page behind.
      overlay.addEventListener("keydown", (e) => {
        if (e.key !== "Tab") return;
        const f = [...overlay.querySelectorAll('a[href],button,input,[tabindex]:not([tabindex="-1"])')]
          .filter((el) => el.offsetParent !== null);
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      });
    };

    const load = () => idx ? Promise.resolve(idx)
      : fetch("/search-index.json").then((r) => r.json()).then((d) => (idx = d)).catch(() => (idx = []));

    const scoreItem = (it, toks) => {
      let s = 0;
      const t = it.t.toLowerCase(), d = (it.d || "").toLowerCase();
      for (const q of toks) {
        const ti = t.indexOf(q);
        if (ti === 0) s += 5;
        else if (ti > -1) s += 3;
        else if (d.indexOf(q) > -1) s += 1;
        else return 0;
      }
      return s;
    };

    const render = (q) => {
      const toks = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
      if (!toks.length) { list.innerHTML = ""; return; }
      if (!idx) { list.innerHTML = '<p class="search-empty">Loading&hellip;</p>'; return; }
      const hits = idx.map((it) => [scoreItem(it, toks), it]).filter((x) => x[0] > 0)
        .sort((a, b) => (b[0] - a[0]) || (a[1].t.length - b[1].t.length)).slice(0, 10);
      list.innerHTML = hits.length
        ? hits.map(([, it]) =>
            '<a class="search-result" href="' + it.u + '"><span class="search-result-title">' + esc(it.t) +
            '</span><span class="search-result-meta">' + esc(it.k) + "</span></a>").join("")
        : '<p class="search-empty">No results &mdash; try "spiral", "TDF", "SMACNA", "Brisbane"&hellip;</p>';
    };

    const open = () => {
      if (!overlay) build();
      overlay.hidden = false;
      isOpen = true;
      btn.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
      load().then(() => render(input.value));
      setTimeout(() => input.focus(), 30);
    };
    const close = () => {
      overlay.hidden = true;
      isOpen = false;
      document.body.style.overflow = "";
      btn.setAttribute("aria-expanded", "false");
      btn.focus();
    };

    btn.addEventListener("click", open);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && isOpen) close();
      else if (e.key === "/" && !isOpen && !/^(input|textarea|select)$/i.test((document.activeElement || {}).tagName || "")) {
        e.preventDefault(); open();
      }
    });

    // honour the WebSite SearchAction URL template (?s=) and plain ?q=
    const params = new URLSearchParams(location.search);
    const preQ = params.get("s") || params.get("q");
    if (preQ) { open(); input.value = preQ; }
  })();

  // WhatsApp click-to-chat: prefill a page-aware message so the first message
  // tells Taokron which page/machine the enquiry is about (lead context, like the
  // form's Lead-source field). Skips if a ?text= is already set.
  (() => {
    const wa = document.querySelector("a.fab-whatsapp[href*='wa.me']");
    if (!wa || /[?&]text=/.test(wa.getAttribute("href"))) return;
    let t = (document.title || "").replace(/\s*[|—-]\s*Taokron.*$/i, "").trim();
    const msg = "Hi Taokron, I'd like to ask about " + (t || "your HVAC duct machinery") + " — " + location.href;
    const base = wa.getAttribute("href").split("?")[0];
    wa.setAttribute("href", base + "?text=" + encodeURIComponent(msg));
  })();
});

/* Lazy-load below-fold motion videos.
   They carry poster images, so nothing is visibly missing until they load. We only
   fetch and play once the card nears the viewport, which keeps initial page weight
   down for visitors who never scroll that far. Hero video is not affected. */
document.addEventListener("DOMContentLoaded", () => {
  const lazyVideos = document.querySelectorAll("video:not(.hero-video)");
  if (!lazyVideos.length) return;
  const start = (v) => {
    // play() can reject on iOS Safari when it lands before metadata is ready, so
    // try again once the element says it can play. Failing both just leaves the
    // poster, which is the same thing the user already sees.
    const tryPlay = () => {
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
    };
    v.preload = "auto";
    v.addEventListener("canplay", tryPlay, { once: true });
    v.load();
    tryPlay();
  };
  if (!("IntersectionObserver" in window)) {
    lazyVideos.forEach(start);
    return;
  }
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      obs.unobserve(entry.target);
      start(entry.target);
    });
  }, { rootMargin: "300px 0px" });
  lazyVideos.forEach((v) => io.observe(v));
});

/* Mobile sticky CTA bar. Every page already has a WhatsApp FAB; on phones the
   quote path was a scroll back to a button. This keeps "Request a quote" one tap
   away: to the on-page form (#quote) when there is one, else to the contact page
   in the page's language. It hides while the on-page form is in view and never
   renders on the contact page. Labels are inline because the language mirrors
   ship without i18n.js. */
document.addEventListener("DOMContentLoaded", () => {
  if (!window.matchMedia || !window.matchMedia("(max-width: 768px)").matches) return;
  if (document.getElementById("quoteForm") || document.querySelector(".mobile-cta-bar")) return;
  const lang = (document.documentElement.lang || "en").slice(0, 2).toLowerCase();
  const L = {
    en: "Request a quote", es: "Solicitar cotización", pt: "Solicitar cotação", fr: "Demander un devis",
    ru: "Запросить цену", tr: "Teklif iste", ar: "اطلب عرض سعر", hi: "कोटेशन माँगें", id: "Minta penawaran", zh: "索取报价"
  };
  const target = document.getElementById("quote");
  const href = target ? "#quote" : (lang === "en" ? "/contact" : "/" + lang + "/contact");
  const bar = document.createElement("div");
  bar.className = "mobile-cta-bar";
  bar.innerHTML =
    '<a class="btn btn-primary" href="' + href + '">' + (L[lang] || L.en) + "</a>" +
    '<a class="btn btn-ghost" href="https://wa.me/61435074994" target="_blank" rel="noopener">WhatsApp</a>';
  document.body.appendChild(bar);
  document.body.classList.add("has-cta-bar");
  const wa = bar.querySelector("a[href*='wa.me']");
  const fab = document.querySelector("a.fab-whatsapp[href*='wa.me']");
  if (wa && fab && /[?&]text=/.test(fab.getAttribute("href"))) wa.setAttribute("href", fab.getAttribute("href"));
  if (target) {
    // Hide the bar while the on-page form is on screen, so it never covers the
    // form's own submit button. Plain scroll math: IntersectionObserver was
    // unreliable under viewport emulation and adds nothing here.
    let ticking = false;
    const check = () => {
      ticking = false;
      const r = target.getBoundingClientRect();
      const onScreen = r.top < window.innerHeight - 80 && r.bottom > 80;
      bar.classList.toggle("is-hidden", onScreen);
    };
    // setTimeout, not requestAnimationFrame: rAF is paused in background tabs and
    // under some webviews, and a 60 ms throttle is plenty for a show/hide.
    const onScroll = () => { if (!ticking) { ticking = true; setTimeout(check, 60); } };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    // Anchor landings do not always emit a scroll event: arriving on a shared
    // /product/x#quote URL the browser jumps to the anchor around load time, so a
    // check() that ran at DOMContentLoaded has already measured the wrong geometry.
    // Re-check on hashchange and once after load so the bar is never left sitting
    // on top of the form's submit button.
    window.addEventListener("hashchange", check);
    window.addEventListener("load", () => setTimeout(check, 120));
    check();
  }
});

/* Clarity conversion events. All on-page forms post to FormSubmit; tag the
   submit (with the email subject as a custom tag, so conversions split by form
   type / machine) and the thank-you view. window.clarity is a queue stub from
   the snippet, so this is safe even before the tag has loaded. */
document.addEventListener("DOMContentLoaded", () => {
  const track = (name, tags) => {
    try {
      if (typeof window.clarity !== "function") return;
      Object.keys(tags || {}).forEach((k) => window.clarity("set", k, tags[k]));
      window.clarity("event", name);
    } catch (e) {}
  };
  document.querySelectorAll('form[action*="formsubmit.co"]').forEach((form) => {
    form.addEventListener("submit", () => {
      const subj = form.querySelector('input[name="_subject"]');
      track("form_submit", { form_subject: (subj && subj.value) || "unknown", form_page: location.pathname });
    });
  });
  if (/[?&](sent|catalogue)=1(&|$)/.test(location.search)) track("form_sent", { form_page: location.pathname });
});

/* Wide comparison tables scroll sideways inside .table-wrap. On a phone only the first
   few columns are visible and the Taokron column is last, so without a cue the reader
   never sees it. Add a right-edge fade and a one-line hint to any wrapper that actually
   overflows; both fade out on first scroll. Labels are inline because the language
   mirrors ship without i18n.js. */
document.addEventListener("DOMContentLoaded", () => {
  const lang = (document.documentElement.lang || "en").slice(0, 2).toLowerCase();
  const L = {
    en: "Swipe for all columns", es: "Desliza para ver todas las columnas",
    pt: "Deslize para ver todas as colunas", fr: "Faites glisser pour voir toutes les colonnes",
    ru: "Прокрутите, чтобы увидеть все столбцы", tr: "Tüm sütunlar için kaydırın",
    ar: "اسحب لعرض كل الأعمدة", hi: "सभी कॉलम देखने के लिए स्वाइप करें",
    id: "Geser untuk melihat semua kolom", zh: "左右滑动查看全部列"
  };
  document.querySelectorAll(".table-wrap").forEach((wrap) => {
    if (wrap.parentElement && wrap.parentElement.classList.contains("table-scroll-shell")) return;
    if (wrap.scrollWidth <= wrap.clientWidth + 1) return;
    const shell = document.createElement("div");
    shell.className = "table-scroll-shell";
    wrap.parentNode.insertBefore(shell, wrap);
    shell.appendChild(wrap);
    const hint = document.createElement("span");
    hint.className = "table-scroll-hint";
    hint.textContent = (L[lang] || L.en) + " →";
    shell.appendChild(hint);
    wrap.addEventListener("scroll", () => shell.classList.add("has-scrolled"), { passive: true, once: true });
  });
});

/* Catalogue slide-in (added 2026-10-02). Most visitors read ~1.4 pages and leave
   without a form; offer the PDF catalogue once, after half a page of scroll or 40 s,
   bottom-left so it never covers the chat / WhatsApp floats on the right. Dismissal
   is remembered for 30 days. Skipped on pages that already are a form. */
document.addEventListener("DOMContentLoaded", () => {
  const path = location.pathname;
  if (/\/(contact|scan|stand|404)(\.html)?$/.test(path) || /[?&](sent|catalogue|saved)=1/.test(location.search)) return;
  try { const t = +localStorage.getItem("catPopDone"); if (t && Date.now() - t < 30 * 864e5) return; } catch (e) {}
  const lang = (document.documentElement.lang || "en").slice(0, 2).toLowerCase();
  const T = {
    en: ["Get the 2026 catalogue", "66 duct machines, one page each. We email the PDF to you now.", "Your email", "Send"],
    es: ["Catálogo 2026", "66 máquinas para conductos, una página cada una. Le enviamos el PDF ahora.", "Su email", "Enviar"],
    pt: ["Catálogo 2026", "66 máquinas para dutos, uma página cada. Enviamos o PDF agora.", "Seu e-mail", "Enviar"],
    fr: ["Catalogue 2026", "66 machines pour conduits, une page chacune. Nous vous envoyons le PDF.", "Votre e-mail", "Envoyer"],
    ru: ["Каталог 2026", "66 машин для воздуховодов, по странице на каждую. Отправим PDF сразу.", "Ваш e-mail", "Отправить"],
    tr: ["2026 kataloğu", "66 kanal makinesi, her biri bir sayfa. PDF'i hemen e-postanıza gönderelim.", "E-posta adresiniz", "Gönder"],
    ar: ["كتالوج 2026", "66 آلة لمجاري الهواء، صفحة لكل آلة. نرسل لك ملف PDF الآن.", "بريدك الإلكتروني", "إرسال"],
    hi: ["2026 कैटलॉग", "66 डक्ट मशीनें, हर मशीन एक पेज पर। PDF अभी ईमेल करते हैं।", "आपका ईमेल", "भेजें"],
    id: ["Katalog 2026", "66 mesin ducting, satu halaman per mesin. PDF kami kirim sekarang.", "Email Anda", "Kirim"],
    zh: ["获取 2026 产品目录", "66 款风管设备，每款一页。PDF 立即发到您的邮箱。", "您的邮箱", "发送"]
  }[lang] || null;
  const L = T || ["Get the 2026 catalogue", "66 duct machines, one page each. We email the PDF to you now.", "Your email", "Send"];
  let shown = false;
  const done = () => { try { localStorage.setItem("catPopDone", String(Date.now())); } catch (e) {} };
  const show = () => {
    if (shown) return; shown = true;
    const box = document.createElement("div");
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-label", L[0]);
    box.style.cssText = "position:fixed;left:12px;bottom:" + (innerWidth < 768 ? 92 : 16) + "px;z-index:9990;max-width:330px;width:calc(100% - 104px);" +
      "background:#fff;color:#16202B;border:1px solid #d6dbe1;border-radius:12px;box-shadow:0 10px 30px rgba(0,0,0,.18);" +
      "padding:14px 14px 12px;font:14px/1.4 system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;direction:" + (lang === "ar" ? "rtl" : "ltr");
    const next = "https://taokron.com/spec-sheets?catalogue=1";
    box.innerHTML =
      '<button type="button" aria-label="Close" style="position:absolute;top:4px;' + (lang === "ar" ? "left" : "right") + ':6px;border:0;background:none;font-size:20px;line-height:1;cursor:pointer;color:#555;padding:4px 6px">&times;</button>' +
      '<strong style="display:block;font-size:15px;margin:0 22px 4px 0"></strong><span class="cp-b" style="display:block;margin-bottom:8px;opacity:.85"></span>' +
      '<form action="https://formsubmit.co/sales@sbkjduct.com" method="POST" style="display:flex;gap:6px">' +
      '<input type="hidden" name="_subject" value="Catalogue request (slide-in, taokron.com)">' +
      '<input type="hidden" name="_template" value="table"><input type="hidden" name="_captcha" value="false">' +
      '<input type="hidden" name="_next" value="' + next + '">' +
      '<input type="hidden" name="Lead source" value="catalogue slide-in ' + path.replace(/[^\w\/\-.]/g, "") + '">' +
      '<input type="hidden" name="_autoresponse" value="Hi, here is the Taokron Product Catalogue 2026 (PDF, 66 machines, one page each): https://taokron.com/downloads/taokron-product-catalogue-2026.pdf  Real installs with photos and video: https://taokron.com/case-studies/  Reply with your material, gauge and duct sizes and an engineer will come back within 12 hours. Ryan Tao, Taokron, +61 435 074 994 (WhatsApp)">' +
      '<input type="text" name="_honey" style="display:none" tabindex="-1" autocomplete="off">' +
      '<input type="email" name="email" required autocomplete="email" style="flex:1;min-width:0;padding:9px 10px;border:1px solid #c9d0d8;border-radius:8px;font-size:15px">' +
      '<button type="submit" style="border:0;border-radius:8px;background:#16202B;color:#fff;font-weight:700;padding:9px 12px;cursor:pointer"></button></form>';
    box.querySelector("strong").textContent = L[0];
    box.querySelector(".cp-b").textContent = L[1];
    box.querySelector('input[type="email"]').placeholder = L[2];
    box.querySelector('button[type="submit"]').textContent = L[3];
    box.querySelector('button[aria-label="Close"]').addEventListener("click", () => { box.remove(); done(); });
    box.querySelector("form").addEventListener("submit", () => {
      done();
      try { if (typeof window.clarity === "function") { window.clarity("set", "form_subject", "catalogue slide-in"); window.clarity("event", "form_submit"); } } catch (e) {}
    });
    document.body.appendChild(box);
    try { if (typeof window.clarity === "function") window.clarity("event", "catalogue_popup_shown"); } catch (e) {}
  };
  const onScroll = () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    if (h > 0 && scrollY / h > 0.5) { removeEventListener("scroll", onScroll); show(); }
  };
  addEventListener("scroll", onScroll, { passive: true });
  setTimeout(show, 40000);
});

/* The homepage event bar sits in normal flow at the top of the page, but the header is
   absolutely positioned at top:0 over the hero, so it covered the bar (found 2026-10-02:
   the show links were hidden behind the logo/nav at every width). Push the header down
   by the bar's height. */
(() => {
  const fit = () => {
    const bar = document.querySelector(".event-bar-wrapper");
    const head = document.querySelector(".site-header");
    if (!bar || !head || getComputedStyle(head).position !== "absolute") return;
    head.style.top = bar.offsetHeight + "px";
  };
  document.addEventListener("DOMContentLoaded", fit);
  addEventListener("load", fit);
  addEventListener("resize", fit, { passive: true });
})();

/* Send visitors on the raw pages.dev host to the real domain */
(function () {
  if (location.hostname === "taokron.pages.dev") {
    location.replace("https://taokron.com" + location.pathname + location.search + location.hash);
  }
})();
