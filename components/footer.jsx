
export function Footer() {
    return (
        <footer className={` relative -mt-14 z-50 `}>

            <section className={` bg-[#FFFF00] text-center px-8 lg:px-0 [clip-path:_polygon(0_0,100%_calc(0%_+_2.62rem),100%_100%,0_100%)] `}>
                <p className={` max-w-5xl mx-auto pt-12 pb-8 text-left text-black text-opacity-80 font-normal text-lg lg:text-xl font-Roboto `}>©2024 <span className={` uppercase font-extrabold font-Rubik `}>Latasoft</span> Chile <span className={` mx-3 font-bold hidden sm:inline-block `}>•</span> <span className={` block sm:inline-block font-NotoSerif italic `}>Tu idea es nuestro código fuente.</span></p>
            </section>
        </footer>
    );
};
// a