# i18n Decisions

- The language switcher was restricted to English-only mode in `assets/js/i18n.js` to prevent mixed-language rendering on pages that still contain untranslated static copy.
- This follows the fail-safe option **(b) hide language options for pages without complete translation parity**.
- Existing `data-i18n` hooks are preserved for future rollout once page-level translation coverage is complete.
