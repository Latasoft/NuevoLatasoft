'use client';
import { useState } from 'react';
import NavigationBar from 'components/NavigationBar';

import imagenServicios01 from 'public/images/imagenservicios01.jpg';

import serviciosbgB from 'public/images/serviciosbgB.jpg';
import serviciosbgC from 'public/images/serviciosbg.jpg';

import ServicioCard from './ServicioCard';
import { useT, useLang } from 'components/LanguageContext';


const ServiciosComponent = () => {
    const t = useT();
    const { lang } = useLang();

    const ServiciosCards = [
        {
            id: 'Web_Care_Lite',
            precioEN: 'US$10', // precio en dólares para la versión en inglés
            cuotasEN: '/month',
            fondoCart: serviciosbgB,
            fondocolor: 'bg-[#FFFFFF]',
            titulo: 'Web Care Lite',
            precio: '$9.990',
            cuotas: '/mes',
            descripcion: 'Plan básico para mantener tu sitio activo y respaldado. Respaldo mensual. Monitoreo general. Soporte básico. Revisión técnica. Ideal para clientes actuales.',
            imagen: imagenServicios01
        },
        {
            id: 'Integraciones',
            precioEN: 'From US$159.99', // precio en dólares para la versión en inglés
            fondoCart: serviciosbgB,
            fondocolor: 'bg-[#FFFF00]',
            titulo: 'Integraciones',
            precio: 'Desde $159.990',
            descripcion: 'Conectamos tu negocio con CRM, sistemas de gestión, plataformas de pago, reservas, ecommerce, WhatsApp y otras herramientas empresariales. Valor final según plataformas, alcance y complejidad de la integración. Áreas que podemos integrar: CRM · ERP · Pagos · Ecommerce · WMS · Logística · GPS & Flotas · Residuos · Inventario · RRHH · BI · IoT · Automatización · IA',
            imagen: imagenServicios01
        },
        {
            id: 'Web_Care_Pro',
            precioEN: 'US$50', // precio en dólares para la versión en inglés
            cuotasEN: ' /month',
            fondoCart: serviciosbgB,
            fondocolor: 'bg-[#613DD2]',
            titulo: 'Web Care Pro',
            precio: '$49.990',
            cuotas: ' /mes',
            descripcion: 'Mantención continua con soporte prioritario y mejoras mensuales. Cambios mensuales. Respaldo frecuente. Optimización de velocidad. Soporte prioritario. Ideal para empresas activas.',
            imagen: imagenServicios01
        },
        {
            id: 'Sistema_Comercial_Inteligente',
            precioEN: 'US$149.99', // precio en dólares para la versión en inglés
            cuotasEN: ' /month',
            fondoCart: serviciosbgB,
            fondocolor: 'bg-[#FFFFFF]',
            titulo: 'Sistema Comercial Inteligente',
            precio: '$149.990',
            cuotas: ' /mes',
            descripcion: 'Sistema digital para captar clientes, automatizar contactos y vender más. Landing o web optimizada. WhatsApp inteligente. Formularios automáticos. Seguimiento de leads. Métricas mensuales. Ideal para negocios que quieren crecer online.',
            imagen: imagenServicios01
        },
        {
            id: 'Diagnóstico_Comercial_Inteligente',
            precioEN: 'US$150', // precio en dólares para la versión en inglés
            cuotasEN: 'One-time payment',
            fondoCart: serviciosbgB,
            fondocolor: 'bg-[#FFFF00]',
            titulo: 'Diagnóstico Comercial Inteligente',
            precio: '$149.990',
            descripcion: 'Análisis estratégico de tu negocio para detectar oportunidades de venta. Revisión de web, redes y canales de venta. Detección de fugas de clientes. Oportunidades de crecimiento. Recomendaciones prácticas inmediatas. Informe ejecutivo profesional. Plan de acción inicial. Ideal para empresas que quieren vender más y tomar mejores decisiones.',
            cuotas: 'Pago Único',
            imagen: imagenServicios01
        },
        {
            id: 'Sistema_de_Captación_Digital',
            precioEN: 'US$309.99', // precio en dólares para la versión en inglés
            cuotasEN: '3 installments',
            fondoCart: serviciosbgB,
            fondocolor: 'bg-[#FFFFFF]',
            titulo: 'Sistema de Captación Digital',
            precio: '$299.990',
            cuotas: 'Pago en 3 cuotas',
            descripcion: 'Landing page profesional enfocada en generar clientes, reservas o ventas directas. Diseño moderno. WhatsApp integrado. Formulario de contacto. Adaptado a celulares. Hosting y dominio. Ideal para negocios que quieren resultados rápidos.',
            imagen: imagenServicios01
        },
        {
            id: 'Web_Corporativa_Pro',
            precioEN: 'US$480', // precio en dólares para la versión en inglés
            cuotasEN: '3 installments',
            fondoCart: serviciosbgB,
            fondocolor: 'bg-[#613DD2]',
            titulo: 'Web Corporativa Pro',
            precio: '$469.990',
            cuotas: 'Pago en 3 cuotas',
            descripcion: 'Sitio web profesional para empresas que quieren destacar y generar confianza online. Diseño premium. Hasta 10 secciones. WhatsApp y formulario. SEO y velocidad. Google Analytics. 3 meses de soporte. Ideal para marcas serias.',
            imagen: imagenServicios01
        },
        {
            id: 'Web_Gestionable',
            precioEN: 'US$669.99', // precio en dólares para la versión en inglés
            cuotasEN: '3 installments',
            fondoCart: serviciosbgB,
            fondocolor: 'bg-[#FFFFFF]',
            titulo: 'Web Gestionable',
            precio: '$649.990',
            cuotas: 'Pago en 3 cuotas',
            descripcion: 'Página web profesional con panel administrador para actualizar contenido sin depender de terceros. Panel autoadministrable. Diseño profesional. Responsive móvil. WhatsApp o formulario. Escalable. Soporte inicial. Ideal para empresas activas y negocios en crecimiento.',
            imagen: imagenServicios01
        },
        {
            id: 'Tienda_Online_Inicial',
            precioEN: 'US$389.99', // precio en dólares para la versión en inglés
            cuotasEN: '3 installments',
            fondoCart: serviciosbgB,
            fondocolor: 'bg-[#FFFF00]',
            titulo: 'Tienda Online Inicial',
            precio: '$379.990',
            cuotas: 'Pago en 3 cuotas',
            descripcion: 'Empieza a vender online con una tienda profesional lista para operar. Catálogo de productos. Carrito de compra. Pagos integrados. WhatsApp ventas. Responsive. Ideal para pymes y emprendedores.',
            imagen: imagenServicios01
        },
        {
            id: 'Ecommerce_Growth',
            precioEN: 'US$719.99', // precio en dólares para la versión en inglés
            cuotasEN: '3 installments',
            fondoCart: serviciosbgB,
            fondocolor: 'bg-[#613DD2]',
            titulo: 'Ecommerce Growth',
            precio: '$699.990',
            cuotas: 'Pago en 3 cuotas',
            descripcion: 'Tienda online profesional para vender 24/7 con pagos automáticos y gestión completa. Carrito de compra. WebPay y MercadoPago. Stock y envíos. Categorías y filtros. Responsive móvil. 6 meses de soporte. Ideal para negocios que quieren escalar ventas online.',
            imagen: imagenServicios01
        },
        {
            id: 'App_MVP',
            precioEN: 'US$2,000', // precio en dólares para la versión en inglés
            cuotasEN: '4 installments',
            fondoCart: serviciosbgB,
            fondocolor: 'bg-[#FFFFFF]',
            titulo: 'App MVP',
            precio: '$1.990.000',
            cuotas: 'Pago en 3 cuotas',
            descripcion: 'Convierte tu idea en un prototipo funcional de app antes de invertir en desarrollo completo. Pantallas principales. Flujo interactivo. Diseño UX/UI. Ajustes iniciales. Base para desarrollo real. Ideal para startups, emprendedores y empresas. Antes de invertir en una app completa, valida la idea con un MVP profesional.',
            imagen: imagenServicios01
        },
        {
            id: 'App_Móvil_Android/iOS',
            precioEN: 'US$5,000', // precio en dólares para la versión en inglés
            cuotasEN: '6 installments',
            fondoCart: serviciosbgB,
            fondocolor: 'bg-[#613DD2]',
            titulo: 'App Móvil Android/iOS',
            precio: '$4.500.000',
            cuotas: ' Pago en 6 cuotas',
            descripcion: 'Aplicación móvil profesional lista para operar y crecer en Android e iOS. Desarrollo a medida. Panel administrativo. Integraciones. Escalable. Publicación en tiendas. Ideal para empresas y plataformas.',
            imagen: imagenServicios01
        }


    ];

    return (
        <>
        <NavigationBar />
        <main className={` relative flex-grow bg-white `}>

            {!!ServiciosCards?.length && (
                <>
                    {ServiciosCards.map((item, index) => (
                        <ServicioCard
                            id={item.id}
                            key={index}
                            fondoCart={item.fondoCart}
                            fondocolor={item.fondocolor}
                            titulo={t(item.titulo)}
                            precio={lang === 'en' ? item.precioEN : item.precio}
                            cuotas={lang === 'en' ? item.cuotasEN : item.cuotas}
                            descripcion={t(item.descripcion)}
                            imagen={item.imagen} />
                    ))}
                </>
            )}

            {/* Nota de precios internacionales: solo en la versión en inglés */}
            {lang === 'en' && (
                <section className={`relative bg-gray-800 text-white px-6 pt-16 pb-28`}>
                    <div className={`max-w-3xl mx-auto text-center`}>
                        <h2 className={`text-2xl md:text-3xl font-bold font-RobotoCondensed text-[rgb(255,255,0)] mb-4`}>International Pricing</h2>
                        <p className={`text-lg md:text-xl font-Roboto opacity-80 leading-relaxed`}>
                            Our services are available to businesses in Chile, Mexico, Spain and the United States. All prices are listed in USD. Local payment arrangements and applicable taxes will be confirmed during the quotation process.
                        </p>
                    </div>
                </section>
            )}

        </main>
        </>
    )

}

export default ServiciosComponent;