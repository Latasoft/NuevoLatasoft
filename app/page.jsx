"use client"; // Marcar el componente como Client Component
import { useEffect, useState } from 'react';
import Link from 'next/link';

import icono1 from 'public/images/des-intranet.png';
import icono2 from 'public/images/app.png';
import icono3 from 'public/images/web.png';
import icono6 from 'public/images/e-commerceapp.png';

const Page = () => {

  const porquenosotros = [
    { icono: icono1, titulo: 'Soporte Web Mensual' },
    { icono: icono2, titulo: 'Desarrollo de aplicaciones móviles' },
    { icono: icono3, titulo: 'Diseño de páginas web' },
    { icono: icono6, titulo: 'E-commerce' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      text: "Cuando Nicolas se contactó con nosotros para ofrecernos servicios, la verdad vi su motivation y carisma por ayudarnos a mejorar como empresa, le dimos la oportunidad de mostrarnos que podía hacer él por Latasoft, hoy estoy a gusto con los servicios ofrecidos, sigan así y mejor chicos",
      author: "Mauricio",
      company: "Pampa Energía",
      location: "Argentina"
    },
    {
      text: "Al haber sido uno de sus primeros clientes, no sabía como iban a trabajar, pero después de varios meses trabajando juntos, debo decir que son superprofesionales y nunca fallan con la calidad de sus servicios ",
      author: "Felipe",
      company: "ProyectaCorp",
      location: "Chile"
    },
    {
      text: "Latasoft y su CEO se han movido siempre en el momento de la creación de startups y captar inversión para los MVP's que desarrollan, eso lo valoramos como institución financiera ",
      author: "Max",
      company: "Merrill Lynch",
      location: "Chile"
    },
    {
      text: "Es agradable trabajar en conjunto con latasoft en el desarrollo de apps Android/IOS, nos han simplificado nuestro trabajo, 100% recomendados",
      author: "Frederick",
      company: "Mobitech Digital",
      location: "EE.UU"
    },
    {
      text: "Una de las pocas empresas de Latinoamérica que conocemos, la verdad es grato trabajar con ellos, siempre son claros y transparentes para los procesos de apps y excelentes en calidad/precio en sus servicios",
      author: "Sammuel",
      company: "BuzzCast",
      location: "EE.UU"
    }

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Cambia el slide cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [slides.length]);

  return (
    <>
      <main className={` relative flex-grow bg-white mt-0 `}>

        <section className={`relative w-full z-30  [filter:_drop-shadow(0_1rem_0.2rem_rgb(0,0,0,0.2))]`}>

          <div className={`relative flex flex-col items-center justify-center h-48 bg-gray-800 [clip-path:_polygon(0_0,100%_0,100%_100%,0_calc(100%_-_2.62rem))] `}>
            <h1 data-aos-once="true" data-aos='fade' className={` relative block text-center w-full transition-all ease-in-out duration-200 `}>
              <span className={` block whitespace-nowrap font-Rubik text-5xl lg:text-7xl font-extrabold uppercase text-[rgb(255,255,0)] `}>Latasoft</span>
              <span className={` hidden `}> | </span>
              <span className={` block whitespace-nowrap mt-0 mb-8 text-white font-RobotoCondensed text-lg md:text-2xl text-opacity-70 `}>Desarrollo Web y Móvil</span>
            </h1>
          </div>
      
        </section>

        {/* Primera sección con imagen de fondo y contenido */}
        <section className={`relative w-full z-20 -mt-14`}>
          <div className={`absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-[url('/images/coverBg.jpg')] opacity-40`} />
          <div className={`absolute top-0 left-0 w-full h-full bg-[#00ffff] bg-opacity-40`} />
          <div className={`absolute top-0 left-0 w-full h-full backdrop-grayscale-70`} />


          <div className={`relative mt-auto w-full`}>
            <div className={`flex flex-col justify-center items-center text-center text-white px-2 md:px-8 `}>

              <div data-aos-once="true" data-aos='zoom-out' className={` max-w-3xl mx-auto pt-36 font-RobotoCondensed font-light text-center mt-5 w-full mb-0 text-lg sm:text-xl md:text-3xl lg:text-4xl text-black `} >
                <p className={` opacity-60 leading-relaxed tracking-tight`}>
                  <span className={` block whitespace-nowrap `}>Diseño web, apps y automatización inteligente para hacer</span>
                  <span className={` block whitespace-nowrap `}>crecer tu negocio.</span>
                </p>
                <div data-aos-once="true" data-aos='flip-left'><hr className={`border-none  mt-5 block mx-auto bg-black bg-opacity-40 w-5 md:w-10 h-1 md:h-2 `} /></div>
                <p className={` mt-5 text-[#402994] leading-relaxed  `} >
                  Tu idea es nuestro código fuente.
                </p>
              </div>
              <div data-aos-once="true" data-aos='fade-up' className={`mt-28 mb-52 py-8 rounded-md mx-auto max-w-5xl bg-black bg-opacity-15 `}>

                <h3 className={` text-center mx-auto w-full text-3xl lg:text-4xl font-bold font-RobotoCondensed opacity-50 text-[#08153e] px-8 `}>Conócenos</h3>
                <p className={` max-w-3xl indent-5 text-center hyphens-auto mx-auto mt-3 mb-6 text-lg md:text-xl lg:text-xl font-medium text-[#08153e] px-8 `}>
                  Creamos soluciones modernas, rápidas y a medida para empresas que quieren vender más y trabajar mejor.
                </p>

                <p className={` pt-6 block text-center text-xl md:text-2xl lg:text-3xl font-medium font-Raleway text-[#08153e]  px-8 `} >
                  {[
                    { href: '/servicios', label: 'Servicios' },
                    { href: '/portafolio', label: 'Portafolio' },
                    { href: '/nosotros', label: 'Quiénes somos' },
                    { href: '/contacto', label: 'Contacto' }
                  ].map((link, index, array) => (
                    <span key={link.href}>
                      <a className={` cursor-pointer py-2 md:py-0 block md:inline-block border-b-2 border-transparent hover:border-solid hover:border-b-2 hover:border-black transition-transform ease-in-out duration-300 `} href={link.href}>{link.label}</a>
                      {index < array.length - 1 && (
                        <span className="hidden md:inline mx-5">•</span>
                      )}
                    </span>
                  ))}

                </p>

              </div>

            </div>
          </div>

        </section>

        {/* Sección del Slider */}
        <section className={`relative z-30  [filter:_drop-shadow(0_1rem_0.2rem_rgb(0,0,0,0.2))] `}>

          <div className={`relative -mt-12 h-[38rem] md:h-[28rem] text-black [clip-path:_polygon(0_0,100%_calc(0%_+_2.62rem),100%_100%,0_calc(100%_-_2.62rem))] `}>

            {/* Imagen de fondo del slider */}
            <div className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat bg-[url('/images/apretondemanos.png')] `} />
            {/* Capas de color con opacidad */}
            <div className={`absolute top-0 left-0 w-full h-full bg-purple-500 bg-opacity-80`} />
            <div className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-50`} />

            {/* Contenido del slider */}
            {!!slides?.length && (
              <div className={` relative max-w-5xl mx-auto block w-full h-full `}>

                {slides.map((item, index) => (
                  <div key={index} className={` absolute top-[19rem] md:top-[14rem] left-0 -translate-y-1/2 text-white text-center font-Roboto text-xl lg:text-2xl ${currentSlide === index ? 'opacity-80' : 'opacity-0'} transition-all ease-in-out duration-700 `}>
                    <div className={`  w-full h-full flex flex-col justify-center items-center `}>
                      <h3 className={` relative text-center mx-auto w-full text-white mb-6 text-3xl lg:text-4xl font-bold font-RobotoCondensed opacity-60 `}>Dejando una huella con<br className={` inline md:hidden `} /> cada cliente</h3>
                      <p className={` mb-6 italic font-NotoSerif px-6 text-justify indent-5 hyphens-auto`} style={{ lineHeight: `1.62` }}>&quot;{item.text}&quot;</p>
                      <h3 className={` font-bold px-6 `}>{item.author}</h3>
                      <p className={` text-base lg:text-lg px-6 `} ><span className={` text-[rgb(255,255,0)] `} >{item.company}</span>, {item.location}.</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Sección de servicios */}
        <section className={`relative -mt-14 pt-24 pb-24 px-6 z-20`}>
          <div className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat bg-[url('/images/equipodetrabajo.jpg')] opacity-80 `} />
          <div className={`absolute top-0 left-0 w-full h-full bg-white bg-opacity-40`} />
          <div className={`absolute top-0 left-0 w-full h-full backdrop-grayscale-60 `} />

          <div className={`relative z-10 mx-auto max-w-5xl text-black text-opacity-80 bg-white bg-opacity-50 rounded-md py-12 px-4`}>
            <h2 className={`text-[rgb(46,46,46)] text-center text-3xl lg:text-4xl transition-all ease-in-out duration-200 font-bold font-RobotoCondensed`}>
              Nuestros servicios
            </h2>
            <p className={` max-w-2xl indent-5 text-left hyphens-auto mx-auto mt-3 mb-16 text-lg md:text-xl lg:text-xl font-medium `}>
              En Latasoft estamos orgullosos de ofrecer nuestros servicios para gran parte de Hispanoamerica, cada cliente es un pilar en nuestro día a día.</p>

          {!!porquenosotros?.length && (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-flow-col lg:auto-cols-fr gap-8 text-center text-lg lg:text-xl font-Roboto">
              {porquenosotros.map((item, index) => (
                <div
                  key={index}
                  className="p-4"
                  data-aos-once="true"
                  data-aos="fade"
                >
                  <img
                    src={item.icono.src}
                    alt={item.titulo}
                    className="mx-auto mb-4 w-28 h-auto opacity-60"
                  />
                  <h3 className="font-medium font-RobotoCondensed text-black text-2xl lg:text-3xl">
                    {item.titulo}
                  </h3>
                </div>
              ))}
            </div>
          )}

          </div>
        </section>

      </main>

    </>
  );
};

export default Page;
