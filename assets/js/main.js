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
      toggle.setAttribute("aria-expanded", open);
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
    btn.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>';
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
        '<div class="search-results" role="listbox"></div>' +
        '<p class="search-hint"><kbd>Esc</kbd> to close &middot; <kbd>Enter</kbd> opens the first result</p></div>';
      document.body.appendChild(overlay);
      input = overlay.querySelector(".search-input");
      list = overlay.querySelector(".search-results");
      overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
      input.addEventListener("input", () => render(input.value));
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") { const a = list.querySelector("a"); if (a) location.href = a.href; }
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
      document.body.style.overflow = "hidden";
      load().then(() => render(input.value));
      setTimeout(() => input.focus(), 30);
    };
    const close = () => {
      overlay.hidden = true;
      isOpen = false;
      document.body.style.overflow = "";
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
  // tells SBKJ which page/machine the enquiry is about (lead context, like the
  // form's Lead-source field). Skips if a ?text= is already set.
  (() => {
    const wa = document.querySelector("a.fab-whatsapp[href*='wa.me']");
    if (!wa || /[?&]text=/.test(wa.getAttribute("href"))) return;
    let t = (document.title || "").replace(/\s*[|—-]\s*SBKJ.*$/i, "").trim();
    const msg = "Hi SBKJ, I'd like to ask about " + (t || "your HVAC duct machinery") + " — " + location.href;
    const base = wa.getAttribute("href").split("?")[0];
    wa.setAttribute("href", base + "?text=" + encodeURIComponent(msg));
  })();
});

