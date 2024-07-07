import Image from "next/image";
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import banner from '@/assets/images/banner.png';
import simba_adulto from '@/assets/images/simba_adulto.png';
import { ArrowUpRight, MapPin } from '@phosphor-icons/react/dist/ssr';
import Section from "@/components/Section";
import AccordionDrawer from "@/components/AccordionDrawer";

const inter = Inter({ subsets: ['latin'] });
const berlin = localFont({ src: '../assets/fonts/BerlinSansFB-Regular.ttf' });

export default function Home() {
  return (
    <main className={`flex flex-col ${berlin.className} lg:pt-20 md:pt-20 max-md:pt-20 sm:pt-24 max-sm:pt-24`}>
      <figure id="musical" className="flex flex-col justify-center w-full bg-bloody-red-600 max-md:max-w-full">
        <Image
          src={banner.src}
          width={2592}
          height={864}
          alt="Banner do musical O Grande Rei"
          className="w-full aspect-[3.03] max-md:max-w-full"
        />
      </figure>

      <Section
        title="O musical"
        bgColor="bg-sunset-yellow-400"
        textColor="text-bloody-red-600"
      >
        <div className="max-w-2xl max-md:max-w-full">
          <p className={`text-2xl ${inter.className}`}>
            Irrompe com cores gloriosas, efeitos impressionantes e música
            encantadora. O espetáculo conta a história poderosa de Simba em
            sua jornada de um pequeno filhote ansioso para se tornar rei até o
            encontro com seu majestoso destino nas Terras do Reino.
          </p>
        </div>
      </Section>

      {/* <Section
        id="elenco"
        title="Elenco"
        bgColor="bg-lemon-yellow-100"
        textColor="text-bloody-red-800"
      >
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col justify-start p-2 w-full rounded-xl bg-bloody-red-600 max-w-xs">
            <Image
              src={simba_adulto}
              width={270}
              height={360}
              alt="Isaque Silva como Simba Adulto"
              className="w-full aspect-[0.75]"
            />
            <div className="flex flex-col p-2">
              <h4 className="text-2xl text-white">Isaque Silva</h4>
              <span className={`text-md text-base text-lemon-yellow-100 ${inter.className}`}>
                Simba Adulto
              </span>
            </div>
          </div>
        </div>
      </Section> */}

      <Section
        id="faq"
        title="Dúvidas Frequentes"
        bgColor="bg-bloody-red-500"
        textColor="text-sunset-yellow-400"
      >
        <div className="flex flex-col gap-5 max-md:flex-col max-md:gap-0 max-md:max-w-full max-w-6xl">
          <AccordionDrawer />
        </div>
      </Section>

      <Section
        id="ingressos"
        title="Ingressos"
        bgColor="bg-sunset-yellow-400"
        textColor="text-bloody-red-600"
      >
        <div className="flex lg:flex-col md:flex-col sm:flex-col max-sm:flex-col justify-between lg:items-center md:items-center sm:items-start max-sm:items-start lg:gap-4 md:gap-4 sm:gap-8 max-sm:gap-8 lg:w-[26rem] md:w-[26rem] sm:w-full max-sm:w-full">
          <div className="flex flex-col lg:justify-center md:justify-center max-md:justify-center lg:items-center md:items-center max-md:items-center sm:justify-left max-sm:justify-left sm:items-start max-sm:items-start text-red-950 text-left">
            <span className={`${inter.className} text-lg`}>01 de novembro</span>
            <h4 className="text-2xl">Músical</h4>
            <h3 className="text-4xl">O Grandei Rei</h3>
          </div>

          <div className="flex lg:flex-row md:flex-row max-md:flex-row sm:flex-col max-sm:flex-col lg:gap-12 md:gap-12 sm:gap-4 max-sm:gap-4 lg:justify-end md:justify-end sm:justify-start max-sm:justify-start items-start">
            <div className="flex flex-col lg:justify-end md:justify-end lg:items-center md:items-center sm:items-start max-sm:items-start max-md:w-full lg:text-right md:text-right sm:text-left max-sm:text-left">
              <span className={`${inter.className} text-lg font-medium`}>
                1º Lote
              </span>
              <div className="flex gap-1.5 whitespace-nowrap">
                <span className="text-2xl">R$</span>
                <h3 className="text-4xl leading-8">
                  22,50
                </h3>
              </div>
            </div>

            <div className="flex flex-col lg:justify-end md:justify-end lg:items-center md:items-center sm:items-start max-sm:items-start max-md:w-full lg:text-right md:text-right sm:text-left max-sm:text-left">
              <span className={`${inter.className} text-lg font-medium`}>
                2º Lote
              </span>
              <div className="flex gap-1.5 whitespace-nowrap">
                <span className="text-2xl">R$</span>
                <h3 className="text-4xl leading-8">
                  22,50
                </h3>
              </div>
            </div>

            <div className="flex flex-col lg:justify-end md:justify-end lg:items-center md:items-center sm:items-start max-sm:items-start max-md:w-full lg:text-right md:text-right sm:text-left max-sm:text-left">
              <span className={`${inter.className} text-lg font-medium`}>
                3º Lote
              </span>
              <div className="flex gap-1.5 whitespace-nowrap">
                <span className="text-2xl">R$</span>
                <h3 className="text-4xl leading-8">
                  22,50
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-3 justify-center lg:items-center md:items-center sm:items-start max-sm:items-start lg:text-2xl md:text-2xl sm:text-xl max-sm:text-xl lg:text-center md:text-center sm:text-left max-sm:text-left text-red-950">
          <MapPin className="min-w-6 min-h-6 w-6 h-6" weight="fill" />
          <span className="max-md:max-w-full leading-6">
            Evento presencial em Theatro José de Alencar, Fortaleza - CE
          </span>
        </div>

        <a
          className="flex flex-row gap-4 justify-center items-center px-5 py-2 text-3xl text-sunset-yellow-400 bg-bloody-red-600 rounded-lg hover:bg-red-800 transition-colors duration-300 ease-in-out"
          target="_blank"
          href="https://www.sympla.com.br/evento/musical-o-grande-rei-celebration-10-anos-da-edys/2540995">
          Garanta já o seu Ingresso no Sympla
          <ArrowUpRight className="min-w-8 min-h-8 w-8 h-8" />
        </a>
      </Section>
    </main >
  );
}
