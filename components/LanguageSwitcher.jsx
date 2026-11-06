'use client';

// Botones 🇪🇸 ES / 🇬🇧 EN para cambiar el idioma.
// Las banderas son SVG porque Windows no muestra los emojis de banderas.
import { useLang } from 'components/LanguageContext';

const FlagES = () => (
  <svg viewBox="0 0 750 500" className="w-5 h-auto rounded-sm" aria-hidden="true">
    <rect width="750" height="500" fill="#c60b1e" />
    <rect width="750" height="250" y="125" fill="#ffc400" />
  </svg>
);

const FlagGB = () => (
  <svg viewBox="0 0 60 30" className="w-5 h-auto rounded-sm" aria-hidden="true">
    <clipPath id="gb-s"><path d="M0,0 v30 h60 v-30 z" /></clipPath>
    <clipPath id="gb-t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" /></clipPath>
    <g clipPath="url(#gb-s)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#gb-t)" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
);

const LanguageSwitcher = () => {
  const { lang, setLang } = useLang();

  const buttonClass = (active) =>
    `flex items-center gap-1.5 px-2 py-1 rounded transition-all font-Raleway text-sm lg:text-base ${
      active ? 'text-yellow-400 font-bold' : 'text-white opacity-70 hover:opacity-100'
    }`;

  return (
    <div className="flex items-center gap-1" role="group" aria-label={lang === 'en' ? 'Change language' : 'Cambiar idioma'}>
      <button type="button" onClick={() => setLang('es')} className={buttonClass(lang === 'es')} aria-pressed={lang === 'es'}>
        <FlagES /> ES
      </button>
      <span className="text-white opacity-50">/</span>
      <button type="button" onClick={() => setLang('en')} className={buttonClass(lang === 'en')} aria-pressed={lang === 'en'}>
        <FlagGB /> EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
