"use client"; // Marcar el componente como Client Component
import { useEffect, useState } from 'react';
import NavigationBar from 'components/NavigationBar';

const PortafolioComponent = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentProjectSlide, setCurrentProjectSlide] = useState(0);
    const [currentAppSlide, setCurrentAppSlide] = useState(0);

    const logos = [
        { name: "Empresa 1", image: "/images/logo1.webp" },
        { name: "Empresa 2", image: "/images/logo2.webp" },
        { name: "Empresa 3", image: "/images/logo3.webp" },
        { name: "Empresa 4", image: "/images/logo4.webp" },
        { name: "Empresa 5", image: "/images/logo5.webp" },
        { name: "Empresa 6", image: "/images/logo6.webp" },
        { name: "Empresa 7", image: "/images/logo7.webp" },
        { name: "Empresa 8", image: "/images/logo8.png" },
        { name: "Empresa 9", image: "/images/logo9.webp" },
        { name: "Empresa 10", image: "/images/logo10.webp" }
    ];


    const slides = [
        { image: "/images/cliente1.jpg" },
        { image: "/images/cliente2.png" },
        { image: "/images/cliente3.png" },
        { image: "/images/cliente4.webp" },
        { image: "/images/cliente5.png" },
        { image: "/images/cliente6.png" },
        { image: "/images/cliente7.png" },
        { image: "/images/cliente8.jpg" },
        { image: "/images/cliente9.png" },
        { image: "/images/cliente10.png" },
        { image: "/images/cliente11.jpg" },
        { image: "/images/cliente12.png" },
        { image: "/images/cliente13.png" },
        { image: "/images/cliente14.png" },
        { image: "/images/cliente15.jpg" },
        { image: "/images/cliente16.jpeg" },
        { image: "/images/cliente17.jpeg" },
        { image: "/images/cliente18.jpeg" },
        { image: "/images/cliente19.jpeg" },
        { image: "/images/cliente20.jpeg" },
        { image: "/images/cliente21.jpeg" }
    ];

    // Nueva constante para el segundo slider
    const projectSlides = [
        { title: "SoapAyuda", description: "Soap ayuda en una plataforma web...", image: "/images/link3.png" },
        { title: "SoftwareYA", description: "Software ya es una pagina web que...", image: "/images/link16.png" },
        { title: "Salud Ya", description: "Salud ya es una aplicación móvil que ayuda...", image: "/images/app6.png" }
        // Agrega más proyectos según sea necesario
    ];

    const appSlides = [
        { title: "Delfos ERP", image: "/images/app1.png" },
        { title: "Pizza hut", image: "/images/app2.png" },
        { title: "Findbox", image: "/images/app3.png" },
        { title: "Surmodel", image: "/images/app4.png" },
        { title: "Snack App", image: "/images/app5.png" },
        { title: "SaludYa", image: "/images/app6.png" },
        { title: "Arenas y cayo", image: "/images/app7.png" },
        { title: "Barrio + F", image: "/images/app8.png" },
        // Agrega más proyectos según sea necesario
    ];

    // Nueva constante para las tarjetas
    const portafolioCards = [
        { image: "/images/link1.png", description: "Autodraft", link: "https://autodraft.netlify.app" },
        { image: "/images/link2.png", description: "Masisa", link: "https://masisa.com" },
        { image: "/images/link3.png", description: "Soap ayuda", link: "https://soapayuda.cl" },
        { image: "/images/link4.png", description: "Seguro obligatorio", link: "https://Seguroobligatorio.cl" },
        { image: "/images/link5.png", description: "WokPanda", link: "https://Wokpanda.netlify.app" },
        { image: "/images/link6.png", description: "Identity Campus", link: "https://Identitycampus.com" },
        { image: "/images/link7.png", description: "Proyecta", link: "https://www.proyecta.cl/" },
        { image: "/images/link8.png", description: "Sur model", link: "https://Surmodel.cl" },
        { image: "/images/link9.png", description: "Fuerza de ventas", link: "https://fuerzadeventas.netlify.app" },
        { image: "/images/link10.png", description: "Interagro", link: "https://Interagro.cl" },
        { image: "/images/link11.png", description: "Frivasa", link: "https://Frivasa.com.br" },
        { image: "/images/link12.png", description: "Pontofrio", link: "https://Pontofrio.com" },
        { image: "/images/link13.png", description: "Cepcon", link: "https://Cepcon.cl" },
        { image: "/images/link14.png", description: "Impulso 360", link: "https://Impulso-360.cl" },
        { image: "/images/link15.png", description: "Total medios Chile", link: "https://Totalmedioschile.cl" },
        { image: "/images/link16.png", description: "SoftwareYa", link: "https://Softwareya.cl" },
        { image: "/images/link17.png", description: "Impulso Venta", link: "https://Impulsoventa.netlify.app" },
        { image: "/images/link18.png", description: "Tus negocios al día", link: "https://www.tusnegociosaldia.online" },
        { image: "/images/link19.png", description: "Invierte en terrenos", link: "https://invierteenterrenos.onrender.com/" },
        { image: "/images/link20.png", description: "Vimerzion", link: "https://Vimerzion.com" },
        { image: "/images/link21.png", description: "Nobletime", link: "https://nobletime.com" },
        { image: "/images/link22.png", description: "Publicityads", link: "https://publicityads--google-partner--meta-ads--linkedin-1.webnode.cl/" },
        { image: "/images/link23.png", description: "Desarrollatcs", link: "https://www.desarrollatcs.es/" },
        { image: "/images/link24.png", description: "Gruas Rodrigo Rios", link: "https://gruasrodrigorios.netlify.app/" },
        { image: "/images/link25.png", description: "Invchincol", link: "https://invchincol-com.webnode.cl/" },
        { image: "/images/link26.png", description: "Dominion", link: "https://dominion-cs.com/es" },
        { image: "/images/link27.png", description: "Vision Trade Forex", link: "https://visiontradeforex.com/" },
        { image: "/images/link28.png", description: "Ton ORG", link: "https://ton.org/es/toncoin" },
        { image: "/images/link29.png", description: "Estating", link: "https://Estating.es" },
        { image: "/images/safincorp.webp", description: "SafinCorp", link: "https://safincorp.cl/inicio" },
        { image: "/images/eletrans-ii.jpg", description: "Eletrans", link: "https://eletrans.cl/" },
        { image: "/images/familygroup.jpg", description: "FamilyPropiedades", link: "https://www.familypropiedades.cl/home" },
        { image: "/images/centro-color.webp", description: "Centro Color", link: "https://centrocolor.cl/" },
        { image: "/images/seguros_montenegro.png", description: "Seguros Montenegro", link: "https://www.segurosmontenegro.cl/" },
        { image: "/images/mantauco.webp", description: "Mantauco", link: "https://mantauco.webnode.cl/" },
        { image: "/images/hockey.png", description: "Hockey Academy", link: "https://hockeyacademy.cl/" },

        // los ultimos portafolios agregados:
        { image: "/images/mezclilla.png", description: "Tienda MDA", link: "https://mezclilla.micreatienda.cl/" },
        { image: "/images/psicoterapia.png", description: "Emhpsicoterapia", link: "https://emhpsicoterapia.cl" },
        { image: "/images/hotandcold.avif", description: "Hot and Cold Services", link: "https://hotandcold.cl" },
        { image: "/images/plataforma_truequeo.png", description: "Plataforma Truequeo", link: "https://services-proyect.netlify.app/reservation" },
        { image: "/images/saludya.png", description: "Panel Control App Saludya", link: "https://saludya-web.onrender.com" },
        { image: "/images/soap_zapallar.png", description: "Soap Municipalidad de Zapallar", link: "https://soapzapallar.netlify.app" },
        { image: "/images/greenpark.png", description: "Greenpark Academy", link: "https://greenparkacademia.com" },
        { image: "/images/pandawok.png", description: "Sistema de Reservas Pandawok Valparaíso", link: "https://pandawok-reserve.netlify.app" },
        { image: "/images/stopcae.png", description: "Stopcae", link: "https://stopcae.cl" },
        { image: "/images/telolavo.jpeg", description: "Telolavo Carwash", link: "https://telolavo.onrender.com" },
                { image: "/images/Sistema_de_lectura_RFID.jpeg", description: "Sistema de lectura RFID" }, // Usa la imagen del adjunto 1
        { image: "/images/Dragon_watch.jpeg", description: "Tienda de Smartwatchs"}, // Usa la imagen del adjunto 2
    ];

    // Intervalo para el slider de imágenes principales
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length); // Avanza entre las 21 imágenes
        }, 3000); // Cambia de imagen cada 3 segundos
        return () => clearInterval(interval);
    }, [slides.length]);

    // Intervalo para el slider de proyectos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentProjectSlide((prev) => (prev + 1) % projectSlides.length);
        }, 5000); // Cambia de proyecto cada 5 segundos
        return () => clearInterval(interval);
    }, [projectSlides.length]);

    // Intervalo para el slider de aplicaciones
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentAppSlide((prev) => (prev + 1) % appSlides.length);
        }, 4000); // Cambia de app cada 4 segundos
        return () => clearInterval(interval);
    }, [appSlides.length]);

    return (
        <>
            <NavigationBar />
            <main className={`relative  `}>

                {/* Sección "Gracias por confiar en nosotros" */}
                <section className={`relative pb-40 pt-40 px-8`}>
                    <div className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat bg-[url('/images/apretondemanos.png')]`} />
                    <div className={`absolute top-0 left-0 w-full h-full bg-purple-700 bg-opacity-80`} />
                    <div className={`absolute top-0 left-0 w-full h-full backdrop-grayscale-60`} />

                    <h2 data-aos-once="true" data-aos='fade' className={`relative text-3xl lg:text-4xl w-full text-center font-bold font-RobotoCondensed text-white transition-all ease-in-out duration-200 text-opacity-80 `}>
                        Gracias por confiar en nosotros
                    </h2>
                    {!!slides?.length && (
                        <div className={`relative max-w-4xl mx-auto block w-full h-60 mt-16 `}>
                            {slides.map((item, index) => (
                                <div key={index}
                                    className={`absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 max-w-xl h-full ${currentSlide === index ? 'opacity-100' : 'opacity-0'} transition-opacity ease-in-out duration-700`} >
                                    <img src={item.image}
                                        alt={`Slide ${index + 1}`}
                                        className={` mx-auto h-full w-auto object-contain `}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                    <div className={`relative max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center text-center mt-16 gap-6 md:gap-0`}>
                        {/* Texto 1 */}
                        <h3 data-aos-once="true" data-aos='fade' className={` tracking-tight text-4xl font-extralight font-RobotoCondensed`}>
                            <span className={` text-4xl md:text-6xl `}>+5 años</span> <br className={` hidden md:inline `} /> de experiencia
                        </h3>

                        {/* Texto 2 */}
                        <h3 data-aos-once="true" data-aos='fade' className={` tracking-tight text-4xl font-extralight font-RobotoCondensed`}>
                            <span className={` text-4xl md:text-6xl `}>+30 webs</span> <br className={` hidden md:inline `} />creadas
                        </h3>

                        {/* Texto 3 */}
                        <h3 data-aos-once="true" data-aos='fade' className={` tracking-tight text-4xl font-extralight font-RobotoCondensed`}>
                            <span className={` text-4xl md:text-6xl `}>+10 apps</span> <br className={` hidden md:inline `} />creadas
                        </h3>

                    </div>
                </section>

                <section className={`relative z-40 -translate-y-20`} style={{ filter: 'drop-shadow(0 1rem 0.2rem rgb(0,0,0,0.2))' }}>
                    <div className={`transition-all ease-in-out duration-300 w-full h-48 bg-[#292929]  [clip-path:_polygon(0_0,_100%_40%,_100%_100%,_0_60%)] `} />
                </section>

                {/* Sección de Tarjetas */}
                <section className={` relative bg-slate-50 -mt-48 pb-32 pt-40 px-8 `}>

                    <div className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat bg-[url('/images/proyecto-fondo-c.jpg')]`} />
                    <div className={`absolute top-0 left-0 w-full h-full bg-[#00ffff] bg-opacity-70`} />
                    <div className={`absolute top-0 left-0 w-full h-full backdrop-grayscale-60`} />

                    <div className={` relative container mx-auto text-center max-w-6xl pt-12 pb-4 sm:pb-6 lg:pb-8 px-4 sm:px-6 lg:px-8 bg-black bg-opacity-20 rounded-lg `}>
                        <h2 data-aos-once="true" data-aos='fade' className={`text-3xl lg:text-4xl font-bold text-[rgb(29,29,29)] font-RobotoCondensed mb-12`}>
                            Proyectos
                        </h2>

                        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 `}>
                            {portafolioCards.map((card, index) => (
                                <div key={index} className={` relative overflow-hidden transition-all ease-in-out duration-300 hover:scale-110 md:hover:scale-125 hover:z-40 aspect-[4/2] sm:aspect-[2/3] hover:shadow-lg hover:shadow-[rgba(0,0,0,0.8)] `}>
                                    <div className={` absolute -top-2 -left-2 w-[110%] h-[110%] bg-cover bg-center `} style={{ backgroundImage: `url('${card.image}')` }} />
                                    <div className={` relative w-full h-full transition-all ease-linear duration-300 backdrop-grayscale-100 hover:backdrop-grayscale-0 `}>
                                        <div className={` relative w-full h-full bg-cover bg-center bg-white bg-opacity-40 hover:bg-opacity-0 transition-all ease-linear duration-300 `}>
                                            <div className={`absolute block bottom-0 left-0 w-full`}>
                                                <p className={`block bg-black bg-opacity-70 mx-0 pt-4 px-2 text-[#FFFFAA] text-2xl font-RobotoCondensed font-medium `}>{card.description}</p>
                                                <p className={`block bg-black bg-opacity-70 mb-0 mx-0 pb-6 px-2 font-medium `} ><a href={card.link} target="_blank" className={`text-white hover:underline `}>
                                                    Ver página</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className={`relative z-40 -translate-y-20`} style={{ filter: 'drop-shadow(0 1rem 0.2rem rgb(0,0,0,0.2))' }}>
                    <div className={`transition-all ease-in-out duration-300 w-full h-48 bg-[#292929]  [clip-path:_polygon(0_0,_100%_40%,_100%_100%,_0_60%)] `} />
                </section>

                <section className={`relative -mt-48 pb-32 pt-40 `}>

                    {/* Fondo */}
                    <div className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat bg-[url('/images/celulares-fondo.jpg')]`} />
                    <div className={`absolute top-0 left-0 w-full h-full bg-[#ffff00] bg-opacity-90`} />
                    <div className={`absolute top-0 left-0 w-full h-full backdrop-grayscale-50`} />

                    <h2 data-aos-once="true" data-aos='fade' className={`relative mx-auto max-w-5xl text-center text-3xl lg:text-4xl font-bold text-black font-RobotoCondensed `}>
                        Algunas Apps que realizamos
                    </h2>
                    <p data-aos-once="true" data-aos='fade' className={`relative mx-auto max-w-5xl text-center text-lg lg:text-xl font-medium text-black font-Roboto mt-2 `}>Explora algunos de nuestros desarrollos de aplicaciones moviles a continuación.</p>

                    {/* Slider de aplicaciones */}

                    {!!appSlides?.length && (
                        <div className={`relative max-w-5xl mx-auto block w-full h-[30rem] mt-6`}>
                            {appSlides.map((item, index) => (
                                <div key={index} className={`absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 `} >
                                    <img src={item.image}
                                        alt={`${item.title} `}
                                        className={`mx-auto w-48 h-auto object-contain  ${currentAppSlide === index ? 'opacity-100' : 'opacity-0'} transition-opacity ease-in-out duration-700`} />
                                    <h4 className={`text-center mt-4 text-3xl font-bold text-black ${currentAppSlide === index ? 'opacity-100' : 'opacity-0'} transition-opacity ease-in-out duration-700 `}>{item.title}</h4>
                                </div>
                            ))}
                        </div>
                    )}

                </section>

                <section className={`relative z-30 -translate-y-20`}> {/*  style={{ filter: 'drop-shadow(0 1rem 0.2rem rgb(0,0,0,0.2))' }} */}
                    <div className={`transition-all ease-in-out duration-300 w-full h-48 bg-gray-800  [clip-path:_polygon(0_0,_100%_40%,_100%_100%,_0_60%)] `} />
                </section>

                <section className={`relative z-40 -mt-48 bg-gray-800 pb-32 pt-10 `}>
                    <h2 data-aos-once="true" data-aos='fade' className={`max-w-5xl mx-auto text-3xl lg:text-4xl font-bold font-RobotoCondensed mb-12 text-center opacity-80 `}>Organizaciones que<br className={` inline md:hidden `}/> confían en nosotros</h2>

                    {!!logos?.length && (
                        <div className={`max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 items-center justify-center px-6 lg:px-0`}>
                            {logos.map((logo, index) => (
                                <div data-aos-once="true" data-aos='fade' key={index} className={`flex justify-center items-center bg-black aspect-square p-6`}>
                                    <img
                                        src={logo.image}
                                        alt={logo.name}
                                        className={`w-full h-auto object-contain`}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </section>
                
            </main>
        </>
    );
};

export default PortafolioComponent;
