'use Client';
import { useState, useRef, useEffect } from 'react';

const ServicioCard = ({ id, index, titulo, precio, cuotas, descripcion, imagen, fondocolor, fondoCart }) => {
    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
    const descriptionRef = useRef(null);

    const toggleDescriptionVisibility = () => {
        setIsDescriptionVisible(!isDescriptionVisible);
    };

    useEffect(() => {
        if (descriptionRef.current) {
            // Dynamically set the height of the description container based on visibility
            if (isDescriptionVisible) {
                descriptionRef.current.style.height = `${descriptionRef.current.scrollHeight}px`;
            } else {
                descriptionRef.current.style.height = '2.7rem';
            }
        }
    }, [isDescriptionVisible]);

    const renderButtons = () => {
        if (titulo === "Proveedores para agencias de marketing") {
            return (
                <p className={`block mt-7`}>
                    <a className={`block font-semibold text-base md:text-lg text-center py-1 bg-[#613DD2] border-solid border-2 border-[#613DD2] rounded-full text-white`}
                        href='/contactar' alt='Contactar'>
                        Contactar
                    </a>
                </p>
            );
        } else if (titulo === "Venta y suscripción de software") {
            return (
                <>
                    <p className={`block mt-7`}>
                        <a className={`block font-semibold text-base md:text-lg text-center py-1 bg-[#6a4bd0] hover:bg-[#613DD2] border-solid border-2 border-[#613DD2] rounded-full text-white text-opacity-70 hover:text-opacity-100 hover:shadow-md hover:shadow-[rgba(0,0,0,0.4)] transition-all ease-in-out duration-300 `}
                            href='mailto:latasoftweb@gmail.com' alt='Vender o suscribir mi software' target="_blank" rel="noopener noreferrer">
                            Vender o suscribir mi software
                        </a>
                    </p>
                    <p className={`block mt-3`}>
                        <a className={`block font-semibold text-base md:text-lg text-center py-1 bg-[#EDE8FB] hover:bg-[#EDE8FB] border-solid border-2 border-[#613DD2] border-opacity-10 rounded-full text-[#613DD2] text-opacity-70 hover:text-opacity-100 hover:shadow-md hover:shadow-[rgba(0,0,0,0.4)] transition-all ease-in-out duration-300 `}
                            href='https://softwareya.cl/' alt='Comprar o suscribir a un software' target="_blank" rel="noopener noreferrer">
                            Comprar o suscribir a un software
                        </a>
                    </p>
                </>
            );
        } else if (titulo === "Venta de base de datos") {
            return (
                <p className={`block mt-7`}>
                    <a className={`block font-semibold text-base md:text-lg text-center py-1 bg-[#6a4bd0] hover:bg-[#613DD2] border-solid border-2 border-[#613DD2] rounded-full text-white text-opacity-70 hover:text-opacity-100 hover:shadow-md hover:shadow-[rgba(0,0,0,0.4)] transition-all ease-in-out duration-300 `}
                        href='https://impulsoventa.netlify.app/' alt='Comprar base de datos' target="_blank" rel="noopener noreferrer">
                        Comprar base de datos
                    </a>
                </p>
            );
        } else {
            return (
                <p className={`block mt-7`}>
                    <a className={`block font-semibold text-base md:text-lg text-center py-1 bg-[#6a4bd0] hover:bg-[#613DD2] border-solid border-2 border-[#613DD2] rounded-full text-white text-opacity-70 hover:text-opacity-100 hover:shadow-md hover:shadow-[rgba(0,0,0,0.4)] transition-all ease-in-out duration-300 `}
                        href="https://wa.me/56932555677" alt='Contactar'>
                        Contactar
                    </a>
                </p>
            );
        }
    };

    return (
        <>
            <section key={index} className={`relative z-40 -translate-y-20 [filter:_drop-shadow(0_1rem_0.2rem_rgb(0,0,0,0.2))] `} >
                <div className={`transition-all ease-in-out duration-300 w-full h-48 bg-[#292929] [clip-path:_polygon(0_0,_100%_40%,_100%_100%,_0_60%)] `} />
            </section>

            <section key={index} className={`relative -mt-48 transition-all ease-in-out duration-300`}>
                <div className={`absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat`} style={{ backgroundImage: `url('${fondoCart.src}')` }} />
                <div className={`absolute top-0 left-0 w-full h-full ${fondocolor} bg-opacity-70`} />
                <div className={`absolute top-0 left-0 w-full h-full backdrop-grayscale-60`} />

                <div id={id} className={`relative pb-32 pt-40 w-full`}>
                    <div className={`relative flex max-w-5xl mx-auto items-center justify-center `}>
                        <div className={` z-40 relative rounded-md font-Raleway p-5 w-80 md:w-[42rem] bg-white bg-opacity-60`}>

                            <div className={`flex flex-col-reverse md:flex-row justify-center items-center px-0 pt-0 md:px-3 md:pt-3`}>
                                <div className={`w-full md:w-7/12 transition-all ease-in-out duration-300`}>
                                    <h3 className={`block text-2xl md:text-3xl font-medium text-black pr-5 text-left`}>{titulo}</h3>

                                    <div className="mt-3 pr-6 flex items-baseline gap-2">
                                    {precio && (
                                        <p className="font-bold text-xl md:text-2xl text-[#613DD2]">
                                        {precio}
                                        </p>
                                    )}

                                    {cuotas && (
                                        <p className="font-normal text-base md:text-lg text-[#613DD2]">
                                        {cuotas}
                                        </p>
                                    )}
                                    </div>
                                </div>
                                <p className={`relative w-full md:w-5/12 rounded-lg overflow-hidden mb-6 md:mb-0 transition-all ease-in-out duration-300 aspect-[16/9]`}>
                                    <img className={`absolute top-1/2 left-1/2 w-full h-full object-center object-cover transform -translate-x-1/2 -translate-y-1/2`} src={imagen.src} alt='' />
                                    <span className={`block w-full h-full absolute top-0 left-0 shadow-inner shadow-black`} />
                                </p>
                            </div>

                            <div className={`block mt-7 `}>
                                {renderButtons()}

                                <div className={`block mt-3`} >

                                    <div ref={descriptionRef}
                                        className={` ${isDescriptionVisible ? ' shadow-md shadow-[rgba(0,0,0,0.4)] ':' hover:shadow-md hover:shadow-[rgba(0,0,0,0.4)] '} transition-all ease-in-out duration-300 py-1 bg-[#EDE8FB] border-solid border-2 border-[#613DD2] border-opacity-10 rounded-3xl overflow-hidden `}>
                                        <p onClick={toggleDescriptionVisibility} className={` cursor-pointer font-semibold ${isDescriptionVisible ? 'text-opacity-100 ':'text-opacity-70 hover:text-opacity-100 ' } text-base md:text-lg text-center text-[#613DD2] transition-all ease-in-out duration-300 `}>
                                            <span className={` `}>
                                                {isDescriptionVisible ? 'Ocultar lo que incluye ' : 'Ver lo que incluye '}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                    fill="currentColor"
                                                    className={`inline w-4 h-auto ml-1 transition-transform duration-300 ${isDescriptionVisible ? 'rotate-180 align-middle ' : 'rotate-0 align-middle '}`} >
                                                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                                </svg>
                                            </span>
                                        </p>
                                        {!!descripcion && (
                                            <ul className={` ${isDescriptionVisible ? 'opacity-100' : ' opacity-0 '} mx-12 transition-all ease-in-out duration-300 font-medium text-base md:text-lg text-center text-[#613DD2] `}>
                                                {descripcion.split('. ').map((line, index) => (
                                                    <li key={index} className={` list-disc list-outside my-5 opacity-80 text-justify hyphens-auto  `}>
                                                        {line}.
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicioCard;
