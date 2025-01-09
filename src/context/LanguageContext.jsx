import React, { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const savedLanguage = localStorage.getItem("language") || "en";
  const [language, setLanguage] = useState(savedLanguage);
  const handleLanguageChange = () =>
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "tr" : "en"));

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
};
