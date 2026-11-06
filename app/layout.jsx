import '../styles/globals.css';
import { Footer } from '../components/footer';
import AOSInitializer from 'components/AOSInitializer';
import { LanguageProvider } from 'components/LanguageContext';

export const metadata = {
    title: {
      default: 'Latasoft',
      template: '%s | Latasoft'
    }
  }

const RootLayout = ({ children }) => {
    return (
        <html lang="es" className={`scroll-smooth`}>
            <head>

                <meta name="description" content="Proveedores. Desarrollo de aplicaciones móviles. Diseño de páginas web. Base de datos. Venta y suscripción de software. E-commerce." />
                <meta name="keywords" content="desarrollo web, aplicaciones web, aplicaciones móviles, diseño web, base de datos, e-commerce" />
                <meta charSet="UTF-8" />
                
                <meta property="og:title" content="Latasoft" />
                <meta property="og:description" content="Proveedores. Desarrollo de aplicaciones móviles. Diseño de páginas web. Base de datos. Venta y suscripción de software. E-commerce." />
                <meta property="og:image" content="/images/latasoft-logo-card.png" />
                <meta property="og:url" content="https://latasoft.cl" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Latasoft" />
                <meta property="og:locale" content="es_ES" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Latasoft" />
                <meta name="twitter:description" content="Proveedores. Desarrollo de aplicaciones móviles. Diseño de páginas web. Base de datos. Venta y suscripción de software. E-commerce." />
                <meta name="twitter:image" content="/images/latasoft-logo-card.png" />

                <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="48x48" href="/images/favicon-48x48.png" />
                <link rel="icon" type="image/png" sizes="180x180" href="/images/favicon-180x180.png" />
                <link rel="icon" type="image/png" sizes="512x512" href="/images/favicon-512x512.png" />

            </head>
            <body className="antialiased text-white min-w-full min-h-screen bg-black flex flex-col relative ">
                <LanguageProvider>
                    <AOSInitializer />
                    {children}
                    <Footer />
                </LanguageProvider>
            </body>
        </html>
    );
};

export default RootLayout;
