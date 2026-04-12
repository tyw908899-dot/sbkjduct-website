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
    revealEls.forEach((el) => obs.observe(el));
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
});

