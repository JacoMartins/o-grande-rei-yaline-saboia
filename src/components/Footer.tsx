"use client"

import { InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import yaline_saboia_logo from "@/assets/images/yaline_saboya.png";
import localFont from "next/font/local";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const berlin = localFont({ src: '../assets/fonts/BerlinSansFB-Regular.ttf' });

export default function Footer() {
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
    }   
    
    return (
        <footer className="flex flex-col justify-center items-center w-full text-xl sunset-yellow-400 bg-bloody-red-800">
            <article className="flex gap-5 justify-center items-center w-full bg-bloody-red-600">
                <div className="flex lg:flex-col md:flex-col max-md:flex-col sm:flex-col-reverse max-sm:flex-col-reverse justify-start items-center gap-10 w-full max-w-6xl w-full px-8 py-12">

                    <div className="flex flex-row gap-6 justify-between items-start w-full">
                        <a
                            href="https://www.instagram.com/escoladedancayalinesaboia/"
                            target="_blank"
                            className="flex flex-col gap-0 text-sunset-yellow-400">
                            <h3 className={`${berlin.className} text-3xl`}>Siga-nos no Instagram</h3>
                            <span className={`${inter.className} text-xl font-light`}>
                                Acompanhe as nossas novidades
                            </span>
                        </a>
                        <a
                            href="https://www.instagram.com/escoladedancayalinesaboia/"
                            target="_blank"
                            className="flex justify-center items-center p-1.5 w-12 h-12 bg-sunset-yellow-400 rounded-2xl text-bloody-red-600 transition-all duration-300 ease-in-out hover:brightness-105 active:brightness-90"
                        >
                            <InstagramLogo className="w-10 h-10" weight="regular" />
                        </a>
                    </div>

                    <div className="flex flex-row gap-[4.5rem] w-full lg:justify-between max-md:justify-between md:justify-between items-center sm:justify-center max-sm:justify-center">
                        <aside className="flex flex-col gap-3 justify-center items-center text-3xl text-center text-sunset-yellow-400">
                            <Image
                                src={yaline_saboia_logo}
                                className="w-40 max-md:w-24"
                                width={256}
                                height={106}
                                alt="Logo Yaline Sabóia"
                            />
                            <h3 className={`${berlin.className}`}>O Grande Rei</h3>
                        </aside>


                        <div className="flex lg:block md:block max-md:block sm:hidden max-sm:hidden flex-col gap-4 text-lg text-sunset-yellow-400 text-right">
                            <span className="font-semibold">Acesso Rápido</span>

                            <nav className="flex flex-col gap-0">
                                <a
                                    className="font-light underline leading-tight"
                                    href="#inicio"
                                    onClick={handleAnchorClick}
                                >
                                    Início
                                </a>
                                <a
                                    className="font-light underline leading-tight"
                                    href="#sinopse"
                                    onClick={handleAnchorClick}
                                >
                                    Sinopse
                                </a>
                                <a
                                    className="font-light underline leading-tight"
                                    href="#elenco"
                                    onClick={handleAnchorClick}
                                >
                                    Elenco
                                </a>
                                <a
                                    className="font-light underline leading-tight"
                                    href="#ingressos"
                                    onClick={handleAnchorClick}
                                >
                                    Ingressos
                                </a>
                                <a
                                    className="font-light underline leading-tight"
                                    href="#faq"
                                    onClick={handleAnchorClick}
                                >
                                    Dúvidas Frequentes
                                </a>
                            </nav>
                        </div>
                    </div>

                </div>
            </article>

            <div className="flex flex-row sm:flex-col max-sm:flex-col gap-5 justify-between w-full max-w-6xl px-8 py-4 max-md:px-5 max-md:max-w-full text-xl">
                <span className={`${berlin.className} text-lemon-yellow-100`}>
                    Website by Jacó Martins & Letícia Reis
                </span>
                <span className={`${berlin.className} text-lemon-yellow-100`}>© Escola de Dança Yaline Sabóia, 2024.</span>
            </div>
        </footer>
    )
}