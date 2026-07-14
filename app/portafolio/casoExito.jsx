'use client';

import { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

const casosExito = [
    {
        id: 1,
        empresa: 'StopCAE',
        titulo: 'Sitio Web Corporativo',
        resumen:
            'Desarrollamos el sitio web corporativo de StopCAE para fortalecer su presencia digital y facilitar el contacto con nuevos usuarios.',
        descripcion:
            'Desarrollamos el sitio web de StopCAE para fortalecer su presencia digital y facilitar el contacto con personas interesadas en asesoría relacionada con el CAE. Tras el lanzamiento de la plataforma y la amplia cobertura obtenida en medios nacionales, incluyendo una publicación en El Mercurio, la organización experimentó un importante aumento en el interés por sus servicios, consolidando su posicionamiento durante un período de alta demanda asociado al debate sobre el Crédito con Aval del Estado (CAE).',
        image: '/images/stopcae.png',
        tags: ['Desarrollo Web', 'Diseño Corporativo', 'Presencia Digital']
    },
    {
        id: 2,
        empresa: 'Family Propiedades',
        titulo: 'Portal Inmobiliario',
        resumen:
            'Desarrollamos un portal inmobiliario que permitió digitalizar la venta de propiedades y generar nuevos negocios.',
        descripcion:
            'Desarrollamos un portal inmobiliario para que Family Propiedades publicara su catálogo de inmuebles y recibiera consultas directas de potenciales compradores. A través de la plataforma se concretó la venta de al menos 12 propiedades valorizadas entre 1.000 y 3.000 UF cada una. Además, la empresa fortaleció su crecimiento mediante una alianza con Scotiabank para la comercialización de propiedades en el norte de Chile.',
        image: '/images/familygroup.jpg',
        tags: ['Desarrollo Web', 'Diseño Inmobiliario', 'Marketing Digital']
    },
    {
        id: 3,
        empresa: 'Panda Wok',
        titulo: 'Sitio Web + Sistema de Reservas',
        resumen:
            'Creamos un sitio web junto a un sistema de reservas que digitalizó completamente el proceso de atención.',
        descripcion:
            'Desarrollamos el sitio web corporativo y un sistema de reservas a medida para Panda Wok, uno de los restaurantes tenedor libre más grandes de la Región de Valparaíso. La plataforma ha gestionado más de 1.900 reservas, representando la atención de más de 9.000 clientes y contribuyendo a un importante volumen de ventas asociado a las reservas.',
        image: '/images/pandawok.png',
        tags: ['+1.900 reservas', '+9.000 clientes', '+$170 millones']
    }
];

export default function CasosExito() {
    const [casoSeleccionado, setCasoSeleccionado] = useState(null);

    return (
        <>
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Casos de éxito</h2>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {casosExito.map((caso) => (
                        <article
                            key={caso.id}
                            className="group overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={caso.image}
                                    alt={caso.empresa}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#8bc34a] bg-white/90 px-3 py-1 rounded-full mb-3">
                                        Caso de éxito
                                    </span>
                                    <h3 className="text-3xl font-bold text-white">{caso.empresa}</h3>
                                </div>
                            </div>

                            <div className="p-7">
                                <h4 className="text-xl font-bold text-slate-900">{caso.titulo}</h4>
                                <p className="mt-4 text-slate-600 leading-relaxed">{caso.resumen}</p>
                                <div className="flex flex-wrap gap-2 mt-6">
                                    {caso.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 rounded-full bg-[#8bc34a]/10 text-[#6fa126] text-sm font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <button
                                    onClick={() => setCasoSeleccionado(caso)}
                                    className="mt-8 inline-flex items-center gap-2 font-semibold text-[#8bc34a] hover:gap-4 transition-all"
                                >
                                    Ver caso completo <ArrowRight size={18} />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {casoSeleccionado && (
                <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-5">
                    <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center border-b p-8">
                            <div>
                                <p className="text-sm uppercase tracking-widest text-[#8bc34a] font-semibold">
                                    Caso de éxito
                                </p>
                                <h2 className="text-3xl font-bold mt-2">{casoSeleccionado.empresa}</h2>
                                <p className="text-slate-500 mt-2">{casoSeleccionado.titulo}</p>
                            </div>
                                <button
                                    onClick={() => setCasoSeleccionado(null)}
                                    className="p-2 rounded-full hover:bg-slate-100 transition"
                                >
                                    <X className="w-7 h-7 text-slate-900" strokeWidth={2.5} />
                                </button>
                        </div>
                        <img
                            src={casoSeleccionado.image}
                            alt={casoSeleccionado.empresa}
                            className="w-full h-72 object-cover"
                        />
                        <div className="p-8">
                            <div className="flex flex-wrap gap-2 mb-6">
                                {casoSeleccionado.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full bg-[#8bc34a]/10 text-[#6fa126] text-sm font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <p className="text-slate-700 leading-8 whitespace-pre-line">
                                {casoSeleccionado.descripcion}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
