"use client";

import localFont from "next/font/local";
import { List } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

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
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <header className={`fixed flex lg:flex-row md:flex-row max-md:flex-row sm:flex-col max-sm:flex-col sm:gap-8 max-sm:gap-8 justify-center items-center px-16 py-6 w-full bg-sunset-yellow-400 text-bloody-red-800 max-md:px-5 max-md:max-w-full ${berlin.className}`}>
            <div className="flex gap-5 justify-between items-center w-full max-w-6xl max-md:max-w-full">
                <h1 className="text-4xl">O Grande Rei</h1>
                <button
                    className="lg:hidden md:hidden sm:block max-sm:block flex items-center justify-center p-2 rounded-full bg-sunset-yellow-400 text-bloody-red-800 transition-colors duration-300 ease-in-out"
                    onClick={handleNavVisibility}
                >
                    <List className="w-8 h-8" weight="bold" />
                </button>
            </div>
            <nav className={`lg:flex md:flex lg:flex-row md:flex-row sm:flex-col max-sm:flex-col ${navVisible ? "sm:flex max-sm:flex" : "sm:hidden max-sm:hidden"} gap-5 justify-between items-center text-2xl max-md:flex-wrap max-md:max-w-full`}>
                <a 
                    href="#musical"
                    onClick={handleAnchorClick}
                >
                    Início
                </a>
                <a 
                    href="#musical"
                    onClick={handleAnchorClick}
                >
                    O musical
                </a>
                <a 
                    href="#elenco"
                    onClick={handleAnchorClick}
                >
                    Elenco
                </a>
                <a 
                    href="#ingressos"
                    onClick={handleAnchorClick}
                >
                    Ingressos
                </a>
            </nav>
        </header>
    )
}