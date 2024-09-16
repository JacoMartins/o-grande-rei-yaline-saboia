import Image from "next/image";
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import banner_pc from '@/assets/images/banner_pc.jpg';
import banner_mob from '@/assets/images/banner_mobile.jpg';
import { MapPin } from '@phosphor-icons/react/dist/ssr';
import Section from "@/components/Section";
import Map from "@/components/Map";
import simba_adulto from "@/assets/images/simba_adulto.png"
import Actor from "@/components/Actor";
import Carousel from "@/components/Carousel";
import Group from "@/components/Group";

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
            Venha se maravilhar com a história de coragem, amizade e autodescoberta que conquistou corações em todo o planeta. &quot;O Grande Rei&quot; não é apenas um musical, é uma celebração da vida e da majestade da natureza que vai te deixar sem palavras.
          </p>
          <p className={`text-2xl ${inter.className} w-full lg:text-justify md:text-justify max-md:text-justify sm:text-left max-sm:text-left`}>
            Não perca a oportunidade de vivenciar essa obra-prima teatral que é simplesmente imperdível!
          </p>
        </div>
      </Section>

      {/* <Section
        id="elenco"
        title="Elenco"
        bgColor="bg-lemon-yellow-100"
        textColor="text-bloody-red-800"
      >
        <span className="text-xl">
          Conheça os membros do elenco do musical
        </span>
        <div className="flex flex-col gap-5 justify-center items-center max-md:flex-col max-md:gap-5 w-full">
          <Carousel className="w-full max-w-5xl">
            <Actor
              image={simba_adulto}
              name="Arthur Valdez"
              role="Simba Criança"
              alt="Arthur Valdez como Simba Criança"
            />
            <Actor
              image={simba_adulto}
              name="Isaque Ferreira"
              role="Simba Adulto"
              alt="Isaque Ferreira como Simba Adulto"
            />
            <Actor
              image={simba_adulto}
              name="Matheus Macedo"
              role="Mufasa"
              alt="Matheus Macedo como Mufasa"
            />
            <Actor
              image={simba_adulto}
              name="Leon Cavalcante"
              role="Scar"
              alt="Leon Cavalcante como Scar"
            />
            <Actor
              image={simba_adulto}
              name="Isadora Brasil"
              role="Nala Criança"
              alt="Isadora Brasil como Nala Criança"
            />
            <Actor
              image={simba_adulto}
              name="Deanira Sabóia"
              role="Nala Adulta"
              alt="Deanira Sabóia como Nala Adulta"
            />
            <Actor
              image={simba_adulto}
              name="Leonardo Reis"
              role="Timão"
              alt="Leonardo Reis como Timão"
            />
            <Actor
              image={simba_adulto}
              name="Paulo André Reis"
              role="Pumba"
              alt="Paulo André Reis como Pumba"
            />
            <Actor
              image={simba_adulto}
              name="Roberta Santos"
              role="Rafiki"
              alt="Roberta SantosRafiki"
            />
            <Actor
              image={simba_adulto}
              name="Naylica Xavier"
              role="Zazu"
              alt="Naylica Xavier como Zazu"
            />
            <Actor
              image={simba_adulto}
              name="Ana Ruth"
              role="Sarabi"
              alt="Ana Ruth como Sarabi"
            />
            <Actor
              image={simba_adulto}
              name="Lia Nara"
              role="Serafina"
              alt="Lia Nara como Serafina"
            />
            <Actor
              image={simba_adulto}
              name="Natália Vasconcelos"
              role="Shenzi"
              alt="Natália Vasconcelos como Shenzi"
            />
            <Actor
              image={simba_adulto}
              name="Luís Eduardo"
              role="Banzai"
              alt="Luís Eduardo como Banzai"
            />
            <Actor
              image={simba_adulto}
              name="Bruna Tayná"
              role="Bill"
              alt="Bruna Tayná como Ed"
            />
          </Carousel>

          <Carousel className="w-full max-w-5xl">
            <Group
              image={simba_adulto}
              name="Leopardos"
              role=""
              alt="Grupo dos Leopardos"
            />

            <Group
              image={simba_adulto}
              name="Zebras"
              role=""
              alt="Grupo dos Zebras"
            />

            <Group
              image={simba_adulto}
              name="Pássaros"
              role=""
              alt="Grupo dos Pássaros"
            />

            <Group
              image={simba_adulto}
              name="Antílopes e Leoas Crianças"
              role=""
              alt="Grupo dos Antílopes e Leoas Crianças"
            />

            <Group
              image={simba_adulto}
              name="Flamingos"
              role=""
              alt="Grupo dos Flamingos"
            />

            <Group
              image={simba_adulto}
              name="Hienas"
              role=""
              alt="Grupo dos Hienas"
            />

            <Group
              image={simba_adulto}
              name="Leoas Jovens"
              role=""
              alt="Grupo dos Leoas Jovens"
            />

            <Group
              image={simba_adulto}
              name="Gnus"
              role=""
              alt="Grupo dos Gnus"
            />
          </Carousel>
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
          <span className={`${inter.className} text-lg`}>22 e 23 de Novembro</span>
          <h4 className="text-2xl">Musical</h4>
          <h3 className="text-4xl">O Grande Rei</h3>
        </div>

        <div className="flex flex-col gap-12 justify-center lg:items-center md:items-center sm:items-start max-sm:items-start lg:text-2xl md:text-2xl sm:text-xl max-sm:text-xl lg:text-center md:text-center sm:text-left max-sm:text-left">
          <span>
            (Em breve estarão disponíveis!)
          </span>
        </div>

        <div className="flex flex-col gap-12 justify-center lg:items-center md:items-center sm:items-start max-sm:items-start lg:text-2xl md:text-2xl sm:text-xl max-sm:text-xl lg:text-center md:text-center sm:text-left max-sm:text-left">
          {/* <div className="flex lg:flex-col md:flex-col sm:flex-col max-sm:flex-col justify-between lg:items-center md:items-center sm:items-start max-sm:items-start lg:gap-4 md:gap-4 sm:gap-8 max-sm:gap-8 lg:w-[26rem] md:w-[26rem] sm:w-full max-sm:w-full">
            <div className="flex lg:flex-row md:flex-row max-md:flex-row sm:flex-row max-sm:flex-row lg:justify-center md:justify-center sm:justify-start max-sm:justify-start items-center w-full">
              <div className={`${berlin.className} text-2xl text-nowrap font-normal w-full text-left`}></div>
              <div className={`${berlin.className} text-2xl text-nowrap font-normal w-full text-left`}>Meia</div>
              <div className={`${berlin.className} text-2xl text-nowrap font-normal w-full text-left`}>Inteira</div>
            </div>

            <div className="flex lg:flex-row md:flex-row max-md:flex-row sm:flex-row max-sm:flex-row lg:justify-start md:justify-start sm:justify-start max-sm:justify-start items-center w-full">
              <span className={`${berlin.className} text-left text-2xl text-nowrap font-normal w-full`}>
                1º Lote
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
                2º Lote
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
          </div> */}


          <div className="flex flex-col gap-4 justify-center lg:items-center md:items-center sm:items-start max-sm:items-start lg:text-2xl md:text-2xl sm:text-xl max-sm:text-xl lg:text-center md:text-center sm:text-left max-sm:text-left text-red-950">
            <Map className="h-48 lg:w-96 md:w-96 sm:w-full max-sm:w-full overflow-hidden" />
            <div className="flex flex-row gap-3 justify-center lg:items-center md:items-center sm:items-start max-sm:items-start lg:text-2xl md:text-2xl sm:text-xl max-sm:text-xl lg:text-center md:text-center sm:text-left max-sm:text-left">
              <MapPin className="min-w-5 min-h-5 w-5 h-5" weight="fill" />
              <span className={`${berlin.className} max-md:max-w-full leading-6 text-[1.375rem] font-medium`}>
                Evento presencial em Theatro José de Alencar, Fortaleza - CE
              </span>
            </div>
          </div>

          {/* <a
            className="flex flex-row gap-4 justify-center items-center px-5 py-2 text-3xl text-sunset-yellow-400 bg-bloody-red-600 rounded-lg hover:bg-red-800 transition-colors duration-300 ease-in-out"
            target="_blank"
            href="https://www.sympla.com.br/evento/musical-o-grande-rei-celebration-10-anos-da-edys/2540995">
            Garanta já o seu Ingresso no Sympla
            <ArrowUpRight className="min-w-8 min-h-8 w-8 h-8" />
          </a> */}
        </div>
      </Section>

      <Section
        id="faq"
        title="Dúvidas Frequentes"
        bgColor="bg-strong-wood-700"
        textColor="text-lemon-yellow-100"
      >
        <div className="flex flex-col gap-5 max-md:flex-col max-md:gap-0 max-md:max-w-full max-w-6xl">
          {/* <AccordionDrawer /> */}
          <span className="text-2xl">(Em construção!)</span>
          

        </div>
      </Section>

    </main >
  );
}
