"use client";

import React, { useEffect, useState } from "react";
import { translations, Locale } from "./translations";
import { LanguageContext } from "./LanguageContext";

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [locale, setLocale] = useState<Locale>("en");

  // 💾 Load saved language on mount
  useEffect(() => {
    const saved = localStorage.getItem("user-lang") as Locale;
    if (saved && (saved === "en" || saved === "ar")) {
      setLocale(saved);
    }
  }, []);

  // 🔄 Update localStorage and HTML attribute when locale changes
  useEffect(() => {
    localStorage.setItem("user-lang", locale);
    // This part triggers your CSS: html[lang="ar"]
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  const t = (key: string) => {
    return (translations[locale] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
