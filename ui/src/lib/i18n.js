import { derived, writable } from "svelte/store";
import translations from "./translation";

const browserLanguage = navigator.language.split("-")[0];

// Initialize the locale store with the browser language or fallback to 'en'
export const locale = writable(browserLanguage || "en");
export const locales = Object.keys(translations);

function translate(locale, key, vars) {
  if (!key) throw new Error("no key provided to $t()");

  // Attempt to retrieve translation for the requested locale
  let text = translations[locale] && translations[locale][key];

  // If translation not found for the requested locale, fallback to English
  if (!text) {
    text = translations["en"] && translations["en"][key];
  }

  if (!text) throw new Error(`no translation found for ${locale}.${key}`);

  Object.keys(vars).map((k) => {
    const regex = new RegExp(`{{${k}}}`, "g");
    text = text.replace(regex, vars[k]);
  });

  return text;
}

export const t = derived(
  locale,
  ($locale) =>
    (key, vars = {}) =>
      translate($locale, key, vars),
);
