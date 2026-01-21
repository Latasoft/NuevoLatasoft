import instagramIcon from 'public/images/instagram.png';
import whatsappIcon from 'public/images/wsp.png';
import banderaChile from 'public/images/b-ch.webp';
import banderaPeru from 'public/images/b-pe.png';
import banderaMexico from 'public/images/b-mx.png';
import banderaBrasil from 'public/images/b-br.webp';
import banderaEspaña from 'public/images/b-es.png';
import NavigationBar from 'components/NavigationBar';
import Link from 'next/link';

const ContactoComponent = () => {
  return (
    <>
      <NavigationBar />
      <main className={`relative `}>
        {/* Fondo e imágenes */}
        <div className={`absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center bg-[url('/images/contactofondo.jpg')]`} />
        <div className={`absolute top-0 left-0 w-full h-full bg-[#232323] bg-opacity-60`} />
        <div className={`absolute top-0 left-0 w-full h-full bg-[#ffffff] bg-opacity-30`} />
        <div className={`absolute top-0 left-0 w-full h-full backdrop-grayscale-60`} />

        {/* Contenido */}

        <section className={`relative mx-auto max-w-5xl pt-40 text-center text-white`}>
          <div className={`flex flex-col items-center`}>
            {/* Título y texto descriptivo */}
            <h2 data-aos-once="true" data-aos='fade' className={`text-3xl lg:text-4xl font-bold font-RobotoCondensed`}>Contacto</h2>
            <p data-aos-once="true" data-aos='fade'
              className={`max-w-3xl mt-6 text-lg md:text-xl lg:text-2xl text-justify indent-5 hyphens-auto font-Roboto opacity-80 mx-8 lg:mx-0`}
              style={{ lineHeight: `1.86` }} >
              Potencie su operación con soluciones a medida: en Latasoft hacemos que su proyecto se adapte a las necesidades únicas de su negocio, llevándolo al siguiente nivel de eficiencia y productividad.
            </p>
            {/* Botón de contacto 
            <button className={`bg-[#5F3ED9] hover:bg-[#4C34B3] text-white py-2 px-8 rounded-full text-lg transition-all ease-in-out duration-300 mx-auto`}>
              Contáctanos
            </button>*/}
          </div>

        </section>
        <section className={`relative mx-auto max-w-5xl text-center text-white`}>
          {/* Iconos de contacto directo */}
          <div className={`mt-36 md:mx-0 mx-8`}>
            <h3 data-aos-once="true" data-aos='fade' className={`text-3xl lg:text-4xl font-bold font-RobotoCondensed`} >Hablemos directamente</h3>
            <div data-aos-once="true" data-aos='fade' className={`mt-10 flex justify-between items-center max-w-xl mx-auto`}>
              <div className={``}>
                <Link href="https://wa.me/56942978432">
                <img src={whatsappIcon.src} alt="WhatsApp" className={`w-auto h-16`} />
                </Link>
              </div>
              <div className={`text-white`}>
                <Link href='mailto:latasoftweb@gmail.com'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`w-auto h-16`} viewBox="0 0 512 512">
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                  </svg>
                </Link>
              </div>
              <div className={``}>
                <Link href='https://www.instagram.com/latasoftchile'>
                  <img src={instagramIcon.src} alt="Instagram" className={`w-auto h-16`} />
                </Link>
              </div>
            </div>
          </div>

        </section>
        <section className={`relative mx-auto max-w-6xl text-center text-white`}>
          <div className={`mt-36 xl:mx-0 mx-4 transiton-all ease-in-out duration-300 `}>
            <h3 data-aos-once="true" data-aos='fade' className={`text-3xl lg:text-4xl font-bold font-RobotoCondensed`}>Encuéntranos</h3>
            <div data-aos-once="true" data-aos='fade' className={`grid gap-5 grid-cols-1 lg:grid-cols-3 mt-12 px-2 md:px-3 lg:px-5 bg-white bg-opacity-70 rounded-md `}>
              <div className={` w-full py-2 md:py-3 lg:py-5 `}>
                <h4 className={` text-2xl pt-5 lg:pt-0 text-gray-800 font-bold text-opacity-90 font-RobotoCondensed `}>Casa Matriz</h4>
                <p className={` leading-snug mt-0 mb-3 text-lg text-gray-800 font-medium text-opacity-60 `}>12 Nte 785 oficina 406, <br className={` hidden lg:inline `} />Viña Del Mar.</p>
                <iframe className={` w-full aspect-[4/2] sm:aspect-[4/1] lg:aspect-[5/8] border-solid border-2 border-black border-opacity-20`} src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3369.3699734551374!2d-71.55002918435804!3d-33.01034029577017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDAwJzM5LjAiUyA3McKwMzInNTMuMSJX!5e0!3m2!1ses-419!2sus!4v1727751683097!5m2!1ses-419!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className={` w-fullpy-2 md:py-3 lg:py-5  `}>
                <h4 className={` text-2xl text-gray-800 font-bold text-opacity-90 font-RobotoCondensed `}>Santo Domingo</h4>
                <p className={` leading-snug mt-0 mb-3 text-lg text-gray-800 font-medium text-opacity-60 `}>Los Crisantemos 146,  <br className={` hidden lg:inline `} />Santo Domingo.</p>
                <iframe className={` w-full aspect-[4/2] sm:aspect-[4/1] lg:aspect-[5/8] border-solid border-2 border-black border-opacity-20 `} src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3321.4701206204895!2d-71.61025642458614!3d-33.64497860750033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDM4JzQxLjkiUyA3McKwMzYnMjcuNyJX!5e0!3m2!1ses-419!2sus!4v1727751453089!5m2!1ses-419!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className={` w-full py-2 md:py-3 lg:py-5 `}>
                <h4 className={` text-2xl text-gray-800 font-bold text-opacity-90 font-RobotoCondensed `}>Santiago</h4>
                <p className={` leading-snug mt-0 mb-3 text-lg text-gray-800 font-medium text-opacity-60 `}>Los Jesuitas 881 <br className={` hidden lg:inline `} />Providencia.</p>
                <iframe className={` w-full aspect-[4/2] sm:aspect-[4/1] lg:aspect-[5/8] border-solid border-2 border-black border-opacity-20 `} src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3329.192690350818!2d-70.62271922459637!3d-33.44428599719594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDI2JzM5LjUiUyA3MMKwMzcnMTIuNSJX!5e0!3m2!1ses-419!2sus!4v1727751340786!5m2!1ses-419!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>

        </section>
        <section className={`relative mx-auto max-w-5xl pb-48 text-center text-white`}>
          <div data-aos-once="true" data-aos='fade' className={`grid gap-8 grid-cols-5 mt-28 mx-8 lg:mx-4`}>
            <img src={banderaBrasil.src} alt="Bandera de Brasil" className={`w-full aspect-[11.45/7.63] opacity-70 `} />
            <img src={banderaChile.src} alt="Bandera de Chile" className={`w-full aspect-[11.45/7.63] opacity-70 `} />
            <img src={banderaPeru.src} alt="Bandera de Peru" className={`w-full aspect-[11.45/7.63] opacity-70 `} />
            <img src={banderaEspaña.src} alt="Bandera de España" className={`w-full aspect-[11.45/7.63] opacity-70 `} />
            <img src={banderaMexico.src} alt="Bandera de México" className={`w-full aspect-[11.45/7.63] opacity-70 `} />
          </div>

        </section>


        <section className={`relative z-30 -translate-y-20`}> {/*  style={{ filter: 'drop-shadow(0 1rem 0.2rem rgb(0,0,0,0.2))' }} */}
          <div className={`transition-all ease-in-out duration-300 w-full h-48 bg-gray-800 [clip-path:_polygon(0_0,_100%_40%,_100%_100%,_0_60%)] `} />
        </section>

        <section className={`relative bg-gray-800 px-8 lg:px-0 z-40 -mt-48 pb-24 pt-3  `}>
          <div className={` max-w-5xl mx-auto flex flex-col justify-start items-start lg:flex-row font-Roboto py-12 gap-8 md:gap-16 `}>

            <div className={` w-full lg:w-2/4 `} >

              <h2 className={` text-2xl md:text-3xl font-bold mb-5 text-left `} >Desarrollamos eso que tienes en  mente, contáctanos.</h2>
              <p className={` text-base md:text-lg font-normal indent-5 text-justify hyphens-auto `}>En Latasoft, nos dedicamos apasionadamente a eso que tienes en mente. Nuestro compromiso es impulsar la innovación a través de soluciones tecnológicas excepcionales. Con un equipo de expertos en desarrollo, nos esforzamos por transformar ideas en realidades digitales. Descubre el poder de la programación con nosotros y lleva tu visión al siguiente nivel. Conecta con nosotros para construir el futuro juntos.</p>

            </div>

            <div className={` w-full lg:w-1/4 `} >

              <h2 className={` text-lg md:text-xl font-bold mb-0 text-left opacity-90 `} >Direcciones</h2>

              <h3 className={` text-base md:text-lg font-medium mt-4 mb-0 ml-4 text-left opacity-90 `}>Casa Matriz</h3>
              <address className={` not-italic text-base md:text-lg font-normal opacity-90 ml-4 `}>
                12 Nte 785 oficina 406, Viña Del Mar.
              </address>

              <h3 className={` text-base md:text-lg font-medium mt-4 mb-0 ml-4 text-left opacity-90 `} >Oficina Santo Domingo</h3>
              <address className={` not-italic text-base md:text-lg font-normal opacity-90 ml-4 `}>
                Los Crisantemos 146, Santo Domingo.
              </address>

              <h3 className={` text-base md:text-lg font-medium mt-4 mb-0 ml-4 text-left opacity-90 `} >Oficina Santiago</h3>
              <address className={` not-italic text-base md:text-lg font-normal opacity-90 ml-4 `}>
                Los Jesuitas 881, Providencia.
              </address>

            </div>
            <div className={` w-full lg:w-1/4 `} >

              <h2 className={` text-lg md:text-xl font-bold mb-2 text-left opacity-90 `} >Horario</h2>
              <address className={` not-italic text-base md:text-lg font-normal opacity-90 ml-4 `}>
                Lunes a viernes de<br className={` hidden lg:inline `} /> 9:00 a 18:00 horas.
              </address>

              <h2 className={` text-lg md:text-xl font-bold mt-4 mb-2 text-left opacity-90 `} >Teléfonos</h2>
              <address className={` not-italic text-base md:text-lg font-normal opacity-90 ml-4 `}>
                <a href="tel:+56942978432">+569 4297 8432</a><br />
                <a href="tel:+56991275137">+569 9127 5137</a>
              </address>

              <h2 className={` text-lg md:text-xl font-bold mt-4 mb-2 text-left opacity-90 `} >Correos</h2>
              <address className={` not-italic text-base md:text-lg font-normal opacity-90 ml-4 `}>
                <a href="mailto:latasoftchile@gmail.com">latasoftchile@gmail.com</a><br />
                <a href="mailto:latasoftchile@gmail.com">latasoftweb@gmail.com</a>
              </address>

            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default ContactoComponent;
