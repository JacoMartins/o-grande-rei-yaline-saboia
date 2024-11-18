"use client";

import localFont from "next/font/local";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";;

const berlin = localFont({ src: '../assets/fonts/BerlinSansFB-Regular.ttf' });

export default function Header() {
    const [navVisible, setNavVisible] = useState(false);

    const handleNavVisibility = () => {
        setNavVisible(!navVisible);
    }

    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const target = e.currentTarget.getAttribute('href');
        const element = document.querySelector(target as string);

        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
        }

        setNavVisible(false);
    }

    return (
        <header className={`fixed flex lg:flex-row md:flex-col max-md:flex-col sm:flex-col max-sm:flex-col sm:gap-8 max-sm:gap-8 justify-center items-center px-16 py-6 w-full bg-bloody-red-800 text-sunset-yellow-400 max-md:px-5 max-md:max-w-full ${berlin.className} z-10`}>
            <div className="flex gap-5 justify-between items-center w-full max-w-6xl max-md:max-w-full">
                <h1 className="text-3xl text-orange-fruit-400">O Grande Rei</h1>
                <button
                    className="lg:hidden md:block sm:block max-sm:block flex items-center justify-center p-2 rounded-full text-lemon-yellow-100 transition-colors duration-300 ease-in-out"
                    onClick={handleNavVisibility}
                >
                    {
                        navVisible ? (
                            <X className="w-8 h-8" weight="bold" />
                        ) : (
                            <List className="w-8 h-8" weight="bold" />
                        )
                    }
                </button>
            </div>
            <nav className={`lg:flex md:flex lg:flex-row md:flex-col sm:flex-col max-sm:flex-col ${navVisible ? "md:flex sm:flex max-sm:flex" : "md:hidden sm:hidden max-sm:hidden"} gap-5 lg:h-auto md:h-screen max-md:h-screen sm:h-screen max-sm:h-screen lg:justify-between md:justify-start sm:justify-start max-sm:justify-start items-center text-2xl max-md:flex-wrap max-md:max-w-full text-lemon-yellow-100`}>
                <a 
                    className="text-nowrap"
                    href="/"
                >
                    Início
                </a>
                <a 
                    className="text-nowrap"
                    href="#sinopse"
                    onClick={handleAnchorClick}
                >
                    Sinopse
                </a>
                <a 
                    className="text-nowrap"
                    href="#elenco"
                    onClick={handleAnchorClick}
                >
                    Elenco
                </a>
                <a 
                    className="text-nowrap"
                    href="#ingressos"
                    onClick={handleAnchorClick}
                >
                    Ingressos
                </a>
                <a 
                    className="text-nowrap"
                    href="#faq"
                    onClick={handleAnchorClick}
                >
                    Dúvidas
                </a>
                <a 
                    className="text-nowrap"
                    href="#apoio"
                    onClick={handleAnchorClick}
                >
                    Apoio
                </a>
                <a 
                    className="text-nowrap"
                    href="#ficha"
                    onClick={handleAnchorClick}
                >
                    Ficha Técnica
                </a>
                {/* <a 
                    className="text-nowrap"
                    href="/programa"
                >
                    Programa
                </a> */}
            </nav>
        </header>
    )
}
