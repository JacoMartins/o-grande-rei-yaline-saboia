import Image from "next/image";
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import banner_pc from '@/assets/images/banner_pc.jpg';
import banner_mob from '@/assets/images/banner_mob.png';
import { ArrowUpRight, MapPin } from '@phosphor-icons/react/dist/ssr';
import Section from "@/components/Section";
import AccordionDrawer from "@/components/AccordionDrawer";
import Map from "@/components/Map";

const inter = Inter({ subsets: ['latin'] });
const berlin = localFont({ src: '../assets/fonts/BerlinSansFB-Regular.ttf' });

export default function Home() {
  return (
    <main className={`flex flex-col ${berlin.className} lg:pt-20 md:pt-20 max-md:pt-20 sm:pt-24 max-sm:pt-24`}>
      <section id="inicio">
        <figure className="lg:flex md:flex max-md:flex sm:hidden max-sm:hidden flex-col justify-center w-full bg-bloody-red-600 max-md:max-w-full">
          <Image
            src={banner_pc.src}
            width={2592}
            height={864}
            alt="Banner do musical O Grande Rei"
            className="w-full aspect-[3.03] max-md:max-w-full"
          />
        </figure>

        <figure className="lg:hidden md:hidden max-md:hidden sm:flex max-sm:flex flex-col justify-center w-full bg-bloody-red-600 max-md:max-w-full">
          <Image
            src={banner_mob.src}
            width={1080}
            height={1080}
            alt="Banner do musical O Grande Rei"
            className="w-full aspect-square max-md:max-w-full"
          />
        </figure>
      </section>

      <Section
        id="sinopse"
        title="Sinopse do Musical"
        bgColor="bg-bloody-red-800"
        textColor="text-lemon-yellow-100"
      >
        <div className="flex flex-col gap-8 max-w-3xl max-md:max-w-full">
          <p className={`text-2xl ${inter.className} w-full lg:text-justify md:text-justify max-md:text-justify sm:text-left max-sm:text-left`}>
            Prepare-se para uma jornada épica e emocionante com o musical O Grande Rei em comemoração ao Celebration 10 Anos da Edys, o filme que marcou a infância de muita gente.
          </p>
          <p className={`text-2xl ${inter.className} w-full lg:text-justify md:text-justify max-md:text-justify sm:text-left max-sm:text-left`}>
            A história segue o jovem leão Simba, desde seu nascimento como herdeiro do trono até sua luta para reivindicar seu lugar como rei das Terras do Reino.
          </p>
          <p className={`text-2xl ${inter.className} w-full lg:text-justify md:text-justify max-md:text-justify sm:text-left max-sm:text-left`}>
            Venha se maravilhar com a história de coragem, amizade e autodescoberta que conquistou corações em todo o planeta. &quot;O Grande Rei&quot; não é apenas um musical, é uma celebração da vida e da majestade da natureza que vai te deixar sem palavras. Não perca a oportunidade de vivenciar essa obra-prima teatral que é simplesmente imperdível!
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
        id="ingressos"
        title="Ingressos"
        bgColor="bg-sunset-yellow-400"
        textColor="text-bloody-red-600"
        className="lg:gap-8 md:gap-8 sm:gap-12 max-sm:gap-12"
      >
        <div className="flex flex-col lg:justify-center md:justify-center max-md:justify-center lg:items-center md:items-center max-md:items-center sm:justify-left max-sm:justify-left sm:items-start max-sm:items-start text-red-950 text-left">
          <span className={`${inter.className} text-lg`}>22 e 23 de novembro</span>
          <h4 className="text-2xl">Musical</h4>
          <h3 className="text-4xl">O Grandei Rei</h3>
        </div>

        <div className="flex flex-col gap-12 justify-center lg:items-center md:items-center sm:items-start max-sm:items-start lg:text-2xl md:text-2xl sm:text-xl max-sm:text-xl lg:text-center md:text-center sm:text-left max-sm:text-left">
          <div className="flex lg:flex-col md:flex-col sm:flex-col max-sm:flex-col justify-between lg:items-center md:items-center sm:items-start max-sm:items-start lg:gap-4 md:gap-4 sm:gap-8 max-sm:gap-8 lg:w-[26rem] md:w-[26rem] sm:w-full max-sm:w-full">
            <div className="flex lg:flex-row md:flex-row max-md:flex-row sm:flex-row max-sm:flex-row lg:justify-center md:justify-center sm:justify-start max-sm:justify-start items-center w-full">
              <div className={`${berlin.className} text-2xl text-nowrap font-normal w-full text-left`}></div>
              <div className={`${berlin.className} text-2xl text-nowrap font-normal w-full text-left`}>Meia</div>
              <div className={`${berlin.className} text-2xl text-nowrap font-normal w-full text-left`}>Inteira</div>
            </div>

            {/* <div className="flex lg:flex-row md:flex-row max-md:flex-row sm:flex-row max-sm:flex-row lg:justify-start md:justify-start sm:justify-start max-sm:justify-start items-center w-full">
              <span className={`${berlin.className} text-left text-2xl text-nowrap font-normal w-full`}>
                1º Lote
              </span>

              <div className="flex flex-col lg:justify-center md:justify-center lg:items-start md:items-start sm:items-start max-sm:items-start max-md:w-full lg:text-center md:text-center sm:text-center max-sm:text-center w-full">
                <div className={`${inter.className} flex flex-row items-start gap-1.5 whitespace-nowrap`}>
                  <span className="text-2xl sm:text-xl max-sm:text-xl sm:font-regular max-sm:font-regular font-medium">R$</span>
                  <h3 className="text-2xl sm:text-xl max-sm:text-xl sm:font-regular max-sm:font-regular font-medium leading-8">
                    50,00
                  </h3>
                </div>
              </div>

              <div className="flex flex-col lg:justify-center md:justify-center lg:items-start md:items-start sm:items-start max-sm:items-start max-md:w-full lg:text-center md:text-center sm:text-center max-sm:text-center w-full">
                <div className={`${inter.className} flex flex-row items-start gap-1.5 whitespace-nowrap`}>
                  <span className="text-2xl sm:text-xl max-sm:text-xl sm:font-regular max-sm:font-regular font-medium">R$</span>
                  <h3 className="text-2xl sm:text-xl max-sm:text-xl sm:font-regular max-sm:font-regular font-medium leading-8">
                    100,00
                  </h3>
                </div>
              </div>
            </div> */}

            <div className="flex lg:flex-row md:flex-row max-md:flex-row sm:flex-row max-sm:flex-row lg:justify-start md:justify-start sm:justify-start max-sm:justify-start items-center w-full">
              <span className={`${berlin.className} text-left text-2xl text-nowrap font-normal w-full`}>
                2º Lote
              </span>

              <div className="flex flex-col lg:justify-center md:justify-center lg:items-start md:items-start sm:items-start max-sm:items-start max-md:w-full lg:text-center md:text-center sm:text-center max-sm:text-center w-full">
                <div className={`${inter.className} flex flex-row items-start gap-1.5 whitespace-nowrap`}>
                  <span className="text-2xl sm:text-xl max-sm:text-xl sm:font-regular max-sm:font-regular font-medium">R$</span>
                  <h3 className="text-2xl sm:text-xl max-sm:text-xl sm:font-regular max-sm:font-regular font-medium leading-8">
                    55,00
                  </h3>
                </div>
              </div>

              <div className="flex flex-col lg:justify-center md:justify-center lg:items-start md:items-start sm:items-start max-sm:items-start max-md:w-full lg:text-center md:text-center sm:text-center max-sm:text-center w-full">
                <div className={`${inter.className} flex flex-row items-start gap-1.5 whitespace-nowrap`}>
                  <span className="text-2xl sm:text-xl max-sm:text-xl sm:font-regular max-sm:font-regular font-medium">R$</span>
                  <h3 className="text-2xl sm:text-xl max-sm:text-xl sm:font-regular max-sm:font-regular font-medium leading-8">
                    110,00
                  </h3>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row md:flex-row max-md:flex-row sm:flex-row max-sm:flex-row lg:justify-start md:justify-start sm:justify-start max-sm:justify-start items-center w-full">
              <span className={`${berlin.className} text-left text-2xl text-nowrap font-normal w-full`}>
                3º Lote
              </span>

              <div className="flex flex-col lg:justify-center md:justify-center lg:items-start md:items-start sm:items-start max-sm:items-start max-md:w-full lg:text-center md:text-center sm:text-center max-sm:text-center w-full">
                <div className={`${inter.className} flex flex-row items-start gap-1.5 whitespace-nowrap`}>
                  <span className="text-2xl sm:text-xl max-sm:text-xl sm:font-regular max-sm:font-regular font-medium">R$</span>
                  <h3 className="text-2xl sm:text-xl max-sm:text-xl sm:font-regular max-sm:font-regular font-medium leading-8">
                    60,00
                  </h3>
                </div>
              </div>

              <div className="flex flex-col lg:justify-center md:justify-center lg:items-start md:items-start sm:items-start max-sm:items-start max-md:w-full lg:text-center md:text-center sm:text-center max-sm:text-center w-full">
                <div className={`${inter.className} flex flex-row items-start gap-1.5 whitespace-nowrap`}>
                  <span className="text-2xl sm:text-xl max-sm:text-xl sm:font-regular max-sm:font-regular font-medium">R$</span>
                  <h3 className="text-2xl sm:text-xl max-sm:text-xl sm:font-regular max-sm:font-regular font-medium leading-8">
                    120,00
                  </h3>
                </div>
              </div>
            </div>
          </div>


          <div className="flex flex-col gap-4 justify-center lg:items-center md:items-center sm:items-start max-sm:items-start lg:text-2xl md:text-2xl sm:text-xl max-sm:text-xl lg:text-center md:text-center sm:text-left max-sm:text-left text-red-950">
            <Map className="h-48 lg:w-96 md:w-96 sm:w-full max-sm:w-full overflow-hidden" />
            <div className="flex flex-row gap-3 justify-center lg:items-center md:items-center sm:items-start max-sm:items-start lg:text-2xl md:text-2xl sm:text-xl max-sm:text-xl lg:text-center md:text-center sm:text-left max-sm:text-left">
              <MapPin className="min-w-5 min-h-5 w-5 h-5" weight="fill" />
              <span className={`${berlin.className} max-md:max-w-full leading-6 text-[1.375rem] font-medium`}>
                Evento presencial em Theatro José de Alencar, Fortaleza - CE
              </span>
            </div>
          </div>

          <a
            className="flex flex-row gap-4 justify-center items-center px-5 py-2 text-3xl text-sunset-yellow-400 bg-bloody-red-600 rounded-lg hover:bg-red-800 transition-colors duration-300 ease-in-out"
            target="_blank"
            href="https://www.sympla.com.br/evento/musical-o-grande-rei-celebration-10-anos-da-edys/2540995">
            Garanta já o seu Ingresso no Sympla
            <ArrowUpRight className="min-w-8 min-h-8 w-8 h-8" />
          </a>
        </div>
      </Section>

      <Section
        id="faq"
        title="Dúvidas Frequentes"
        bgColor="bg-strong-wood-700"
        textColor="text-lemon-yellow-100"
      >
        <div className="flex flex-col gap-5 max-md:flex-col max-md:gap-0 max-md:max-w-full max-w-6xl">
          <AccordionDrawer />
        </div>
      </Section>

    </main >
  );
}
