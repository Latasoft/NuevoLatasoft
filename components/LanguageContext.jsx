'use client';

// Guarda el idioma elegido (es / en) y lo comparte con toda la web.
import { createContext, useContext, useEffect, useState } from 'react';
import en from 'i18n/en';

const LanguageContext = createContext({ lang: 'es', setLang: () => {} });

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('es');

  // Al cargar, recupera el idioma que la persona eligió antes
  useEffect(() => {
    try {
      const saved = localStorage.getItem('lang');
      if (saved === 'en' || saved === 'es') setLangState(saved);
    } catch (e) {}
  }, []);

  // Actualiza el atributo lang de la página (ayuda a Google y a lectores de pantalla)
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (newLang) => {
    setLangState(newLang);
    try {
      localStorage.setItem('lang', newLang);
    } catch (e) {}
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}

// t('texto en español') devuelve el texto en el idioma elegido
export function useT() {
  const { lang } = useLang();
  return (texto) => (lang === 'en' ? en[texto] ?? texto : texto);
}
