'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navItems = [
  { linkText: 'Inicio', href: '/' },
  { linkText: 'Servicios', href: '/servicios' },
  { linkText: 'Portafolio', href: '/portafolio' },
  { linkText: 'Quienes somos', href: '/nosotros' },
  { linkText: 'Contacto', href: '/contacto' }
];

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50"
      style={{
        filter: 'drop-shadow(0 0.5rem 0.2rem rgb(0 0 0 / 0.3))'
      }}
    >
      <div
        className="
          [clip-path:_polygon(0_0,100%_0,100%_100%,0_calc(100%_-_1.38rem))]
          bg-black
          px-6
          py-4
        "
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between">

          {/* Logo */}
          <h1 className="uppercase text-yellow-400 text-2xl md:text-3xl font-extrabold font-Rubik">
            Latasoft
          </h1>

          {/* Menú escritorio */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="border-b border-transparent hover:border-white transition-all"
              >
                <Link
                  href={item.href}
                  className="font-Raleway text-white text-base lg:text-lg opacity-80 hover:opacity-100 transition-all"
                >
                  {item.linkText}
                </Link>
              </li>
            ))}
          </ul>

          {/* Botón hamburguesa */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-yellow-400"
            aria-label="Abrir menú"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Menú móvil */}
        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all
            duration-300
            ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}
          `}
        >
          <ul className="flex flex-col gap-2 pb-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="
                    block
                    py-3
                    border-b
                    border-white/20
                    text-white
                    font-Raleway
                    text-lg
                    opacity-80
                    hover:opacity-100
                    transition-all
                  "
                >
                  {item.linkText}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;