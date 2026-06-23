/* SBKJ i18n loader v33 — lean build.
   EN pages are authored in English (no inline EN dict).
   Switching language navigates to the static /<lang>/ page when one exists;
   otherwise the dict is lazy-loaded and applied in place. */
(function () {
  "use strict";
  var SELF = ""; try { SELF = (document.currentScript && document.currentScript.src) || ""; } catch (e) {}
  if (!SELF) { var ss = document.getElementsByTagName("script"); for (var z = 0; z < ss.length; z++) { if (/i18n\.js/.test(ss[z].src)) { SELF = ss[z].src; break; } } }
  var DATA_BASE = SELF.replace(/[^\/]*$/, "") + "i18n-data/";
  var DATA_VER = "7";
  var LANGS = {
    en: { label: "English", flag: "\uD83C\uDDEC\uD83C\uDDE7" }, zh: { label: "\u4E2D\u6587", flag: "\uD83C\uDDF8\uD83C\uDDEC" },
    es: { label: "Espa\u00F1ol", flag: "\uD83C\uDDEA\uD83C\uDDF8" }, ru: { label: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439", flag: "\uD83C\uDDF7\uD83C\uDDFA" },
    ar: { label: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", flag: "\uD83C\uDDF8\uD83C\uDDE6" }, tr: { label: "T\u00FCrk\u00E7e", flag: "\uD83C\uDDF9\uD83C\uDDF7" },
    fr: { label: "Fran\u00E7ais", flag: "\uD83C\uDDEB\uD83C\uDDF7" }, pt: { label: "Portugu\u00EAs", flag: "\uD83C\uDDE7\uD83C\uDDF7" },
    hi: { label: "\u0939\u093F\u0928\u094D\u0926\u0940", flag: "\uD83C\uDDEE\uD83C\uDDF3" }, id: { label: "Indonesia", flag: "\uD83C\uDDEE\uD83C\uDDE9" }
  };
  var STATIC_LANGS = { es: 1, pt: 1, fr: 1, ru: 1, ar: 1, hi: 1, tr: 1, id: 1, zh: 1 };
  var GEN_PAGES = {
    "/index.html": 1, "/machines.html": 1, "/contact.html": 1, "/about.html": 1,
    "/categories/index.html": 1, "/categories/spiral-duct-machinery.html": 1,
    "/categories/auto-duct-lines.html": 1, "/categories/tdf-and-lockformer.html": 1,
    "/categories/duct-welding-machines.html": 1, "/categories/cutting-and-forming.html": 1,
    "/categories/flexible-duct-machinery.html": 1,
    "/product/sbtf-1602.html": 1,
    "/product/sbal-v.html": 1,
    "/product/tdf-flange.html": 1
  };

  function normPath() {
    var p = location.pathname;
    if (p === "/" || p === "") return "/index.html";
    if (p === "/categories/") return "/categories/index.html";
    return p;
  }
  function staticLangUrl(lang) {
    if (!STATIC_LANGS[lang]) return null;
    var p = normPath();
    if (!GEN_PAGES[p]) return null;
    return "/" + lang + (p === "/index.html" ? "/" : p);
  }

  var currentLang = localStorage.getItem("sbkj-lang") || "en";
  if (!LANGS[currentLang]) currentLang = "en";
  var langData = null;   // {t,spec,prod} for active non-en language
  var cache = {};        // lang -> data

  function t(key) {
    return (currentLang !== "en" && langData && langData.t[key] != null) ? langData.t[key] : null;
  }
  function translateSpecLabel(text) {
    if (currentLang === "en" || !langData) return text;
    return langData.spec && langData.spec[text] != null ? langData.spec[text] : text;
  }
  function getProductSlug() { var m = window.location.pathname.match(/\/product\/([^\/]+)\.html/); return m ? m[1] : null; }
  function stash(el, prop) { if (el.dataset._i18nOrig == null) el.dataset._i18nOrig = el[prop]; }

  function applyTranslations() {
    var en = currentLang === "en";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      if (en) { if (el.dataset._i18nOrig != null) el.textContent = el.dataset._i18nOrig; return; }
      var v = t(el.getAttribute("data-i18n")); if (v != null) { stash(el, "textContent"); el.textContent = v; }
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      if (en) { if (el.dataset._i18nOrig != null) el.innerHTML = el.dataset._i18nOrig; return; }
      var v = t(el.getAttribute("data-i18n-html")); if (v != null) { stash(el, "innerHTML"); el.innerHTML = v; }
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      if (en) { if (el.dataset._i18nOrig != null) el.placeholder = el.dataset._i18nOrig; return; }
      var v = t(el.getAttribute("data-i18n-placeholder")); if (v != null) { stash(el, "placeholder"); el.placeholder = v; }
    });
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
    var sel = document.getElementById("sbLangCurrent");
    if (sel) sel.innerHTML = LANGS[currentLang].flag + ' <span class="lang-label">' + LANGS[currentLang].label + "</span>";
    var chatInput = document.getElementById("sbChatInput");
    if (chatInput && currentLang !== "en") { var ph = t("chat.placeholder"); if (ph != null) { stash(chatInput, "placeholder"); chatInput.placeholder = ph; } }
    else if (chatInput && chatInput.dataset._i18nOrig != null) { chatInput.placeholder = chatInput.dataset._i18nOrig; }
    document.querySelectorAll(".spec-table tbody tr").forEach(function (row) {
      var firstTd = row.querySelector("td:first-child");
      if (firstTd && !firstTd.dataset._orig) firstTd.dataset._orig = firstTd.textContent;
      if (firstTd) firstTd.textContent = translateSpecLabel(firstTd.dataset._orig);
    });
    var slug = getProductSlug();
    var pd = (currentLang !== "en" && langData && langData.prod) ? langData.prod[slug] : null;
    if (slug) {
      var sub = document.querySelector(".product-subtitle");
      if (sub) {
        if (!sub.dataset._orig) sub.dataset._orig = sub.textContent;
        sub.textContent = (pd && pd.s) ? pd.s : sub.dataset._orig;
      }
      var intro = document.querySelector(".product-intro");
      if (intro) {
        if (!intro.dataset._orig) intro.dataset._orig = intro.innerHTML;
        if (pd && pd.d) {
          var h2 = intro.querySelector("h2"); var h2html = h2 ? h2.outerHTML : "";
          intro.innerHTML = h2html + "<p>" + pd.d + "</p>";
        } else if (currentLang === "en" && intro.dataset._orig) {
          intro.innerHTML = intro.dataset._orig;
        }
      }
    }
  }

  function loadLang(lang, cb) {
    if (lang === "en") { langData = null; cb(); return; }
    if (cache[lang]) { langData = cache[lang]; cb(); return; }
    var s = document.createElement("script");
    s.src = DATA_BASE + lang + ".js?v=" + DATA_VER;
    s.async = true;
    s.onload = function () { var d = window.__SBKJ_I18N_DATA__; if (d) { cache[lang] = d; langData = d; } cb(); };
    s.onerror = function () { cb(); };
    document.head.appendChild(s);
  }

  function setLang(lang) {
    if (!LANGS[lang]) return;
    localStorage.setItem("sbkj-lang", lang);
    var u = staticLangUrl(lang);
    if (u) { window.location.href = u; return; }
    currentLang = lang;
    loadLang(lang, applyTranslations);
  }

  function createSwitcher() {
    var nav = document.querySelector(".site-nav");
    if (!nav) return;
    var wrap = document.createElement("div");
    wrap.className = "lang-switcher";
    var optionsHtml = "";
    for (var code in LANGS) optionsHtml += '<button class="lang-option" data-lang="' + code + '">' + LANGS[code].flag + " " + LANGS[code].label + "</button>";
    wrap.innerHTML = '<button class="lang-toggle" id="sbLangToggle" aria-expanded="false" aria-label="Change language"><span id="sbLangCurrent">' + LANGS[currentLang].flag + ' <span class="lang-label">' + LANGS[currentLang].label + '</span></span><svg viewBox="0 0 12 12" width="10" height="10"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" fill="none"/></svg></button><div class="lang-dropdown" id="sbLangDropdown">' + optionsHtml + '</div>';
    nav.parentElement.insertBefore(wrap, nav.nextSibling);
    var toggle = document.getElementById("sbLangToggle");
    var dropdown = document.getElementById("sbLangDropdown");
    toggle.addEventListener("click", function (e) { e.stopPropagation(); var open = dropdown.classList.toggle("lang-dropdown-open"); toggle.setAttribute("aria-expanded", open); });
    dropdown.querySelectorAll(".lang-option").forEach(function (btn) {
      btn.addEventListener("click", function () { setLang(btn.dataset.lang); dropdown.classList.remove("lang-dropdown-open"); toggle.setAttribute("aria-expanded", "false"); });
    });
    document.addEventListener("click", function () { dropdown.classList.remove("lang-dropdown-open"); toggle.setAttribute("aria-expanded", "false"); });
  }

  function init() {
    // Pages with a static /<lang>/ version always load as authored English;
    // language changes only on an explicit switcher click (owner decision
    // 2026-06-12: the EN URL must never auto-switch).
    if (GEN_PAGES[normPath()]) { currentLang = "en"; createSwitcher(); return; }
    createSwitcher();
    if (currentLang !== "en") loadLang(currentLang, applyTranslations);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
  window.SBKJ_i18n = { t: t, setLang: setLang, currentLang: function () { return currentLang; } };
})();
