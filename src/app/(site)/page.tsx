import Image from "next/image";
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import { MapPin } from '@phosphor-icons/react/dist/ssr';
import Section from "@/components/Section";
import Map from "@/components/Map";
import Actor from "@/components/Actor";
import Carousel from "@/components/Carousel";
import Group from "@/components/Group";

import banner_pc from '@/assets/images/banner_pc.jpg';
import banner_mob from '@/assets/images/banner_mobile.jpg';

import simba_adulto from "@/assets/images/characters/simba_adulto.png"
import simba_crianca from "@/assets/images/characters/simba_crianca.png"
import nala_crianca from "@/assets/images/characters/nala_crianca.png"
import nala_adulta from "@/assets/images/characters/nala_adulta.png"
import timon from "@/assets/images/characters/timon.webp"
import ed from "@/assets/images/characters/ed.png"
import scar from "@/assets/images/characters/scar.png"
import mufasa from "@/assets/images/characters/mufasa.png"
import pumba from "@/assets/images/characters/pumba.png"
import rafiki from "@/assets/images/characters/rafiki.webp"
import zazu from "@/assets/images/characters/zazu.png"
import sarabi from "@/assets/images/characters/sarabi.png"
import sarafina from "@/assets/images/characters/sarafina.png"
import shenzi from "@/assets/images/characters/shenzi.png"
import banzai from "@/assets/images/characters/banzai.png"
import bill from "@/assets/images/characters/bill.png"
import leopardo from "@/assets/images/characters/leopardo.png"
import zebra from "@/assets/images/characters/zebras.png"
import bird from "@/assets/images/characters/bird.png"
import antilope from "@/assets/images/characters/antilope_solo.png"
import flamingos from "@/assets/images/characters/flamingos.png"
import hienas from "@/assets/images/characters/hienas.png"
import leoas_jovens from "@/assets/images/characters/leoas_jovens.png"
import gnus from "@/assets/images/characters/gnus.png"

import banzai_elenco from "@/assets/images/elenco/banzai.png"
import bill_elenco from "@/assets/images/elenco/bill.png"
import ed_elenco from "@/assets/images/elenco/ed.png"
import mufasa_elenco from "@/assets/images/elenco/mufasa.png"
import nala_adulta_elenco from "@/assets/images/elenco/nala_adulta.png"
import nala_crianca_elenco from "@/assets/images/elenco/nala_crianca.png"
import pumba_elenco from "@/assets/images/elenco/pumba.png"
import rafiki_elenco from "@/assets/images/elenco/rafiki.png"
import sarafina_elenco from "@/assets/images/elenco/sarafina.png"
import sarabi_elenco from "@/assets/images/elenco/sarabi.png"
import scar_elenco from "@/assets/images/elenco/scar.png"
import shenzi_elenco from "@/assets/images/elenco/shenzi.png"
import simba_adulto_elenco from "@/assets/images/elenco/simba_adulto.png"
import simba_crianca_elenco from "@/assets/images/elenco/simba_crianca.png"
import timao_elenco from "@/assets/images/elenco/timao.png"
import zazu_elenco from "@/assets/images/elenco/zazu.png"

import antilopes_elenco from "@/assets/images/elenco/antilopes.png"
import flamingos_elenco from "@/assets/images/elenco/flamingos.png"
import gnus_elenco from "@/assets/images/elenco/gnus.png"
import hienas_elenco from "@/assets/images/elenco/hienas.png"
import leoas_criancas_elenco from "@/assets/images/elenco/leoas_criancas.png"
import leoas_jovens_elenco from "@/assets/images/elenco/leoas_jovens.png"
import leopardos_elenco from "@/assets/images/elenco/leopardos.png"
import passaros_elenco from "@/assets/images/elenco/passaros.png"
import passaros_fita_elenco from "@/assets/images/elenco/passaros_fita.png"
import zebras_elenco from "@/assets/images/elenco/zebras.png"
import canto_das_pastagem_elenco from "@/assets/images/elenco/canto_das_pastagem.png"
import esta_em_ti_thembas_elenco from "@/assets/images/elenco/esta_em_ti_thembas.png"

import adce from "@/assets/images/logos/adce.png"
import govce from "@/assets/images/logos/govce.png"
import secult from "@/assets/images/logos/secult.png"
import theatro from "@/assets/images/logos/theatro.png"
import idm from "@/assets/images/logos/idm-branco.png"
import konten from "@/assets/images/logos/konten.png"
import konten_limpeza from "@/assets/images/logos/konten_limpeza.png"
import gutrep from "@/assets/images/logos/gut.rep.png"
import beleza_nossa from "@/assets/images/logos/beleza_nossa_branco.png"
import sg_topdecor from "@/assets/images/logos/sg_topdecor.png"

import Audio from "@/components/Audio";
import Timer from "@/components/Timer";
import AccordionDrawer from "@/components/AccordionDrawer";

const inter = Inter({ subsets: ['latin'] });
const berlin = localFont({ src: '../../assets/fonts/BerlinSansFB-Regular.ttf' });

export default function Home() {
  return (
    <main className={`flex flex-col ${berlin.className} lg:pt-20 md:pt-20 max-md:pt-20 sm:pt-24 max-sm:pt-24`}>
      <section id="timer" className="flex flex-row justify-center items-center p-4 bg-sunset-yellow-400 text-center uppercase lg:text-2xl md:text-2xl sm:text-xl max-sm:text-xl text-bloody-red-800">
        <Timer />
      </section>

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
        <Audio audioSource="/assets/audio/reileao.mp3" />
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

      <Section
        id="elenco"
        title="Elenco"
        bgColor="bg-lemon-yellow-100"
        textColor="text-bloody-red-800"
      >
        <span className="lg:text-2xl md:text-2xl sm:text-xl max-sm:text-xl text-center">
          Conheça os membros do elenco do musical
        </span>
        <div className="flex flex-col gap-5 justify-center items-center max-md:flex-col max-md:gap-5 w-full">
          <Carousel className="w-full max-w-5xl">
            <Actor
              actorImage={simba_crianca_elenco}
              characterImage={simba_crianca}
              name="Arthur Valdez"
              role="Simba Criança"
              alt="Arthur Valdez como Simba Criança"
            />
            <Actor
              actorImage={simba_adulto_elenco}
              characterImage={simba_adulto}
              name="Isaque Ferreira"
              role="Simba Adulto"
              alt="Isaque Ferreira como Simba Adulto"
            />
            <Actor
              actorImage={mufasa_elenco}
              characterImage={mufasa}
              name="Matheus Macedo"
              role="Mufasa"
              alt="Matheus Macedo como Mufasa"
            />
            <Actor
              actorImage={scar_elenco}
              characterImage={scar}
              name="Leon Cavalcante"
              role="Scar"
              alt="Leon Cavalcante como Scar"
            />
            <Actor
              actorImage={nala_crianca_elenco}
              characterImage={nala_crianca}
              name="Izadora Brasil"
              role="Nala Criança"
              alt="Izadora Brasil como Nala Criança"
            />
            <Actor
              actorImage={nala_adulta_elenco}
              characterImage={nala_adulta}
              name="Deanira Sabóia"
              role="Nala Adulta"
              alt="Deanira Sabóia como Nala Adulta"
            />
            <Actor
              actorImage={timao_elenco}
              characterImage={timon}
              name="Leonardo Reis"
              role="Timão"
              alt="Leonardo Reis como Timão"
            />
            <Actor
              actorImage={pumba_elenco}
              characterImage={pumba}
              name="Paulo André Reis"
              role="Pumba"
              alt="Paulo André Reis como Pumba"
            />
            <Actor
              actorImage={rafiki_elenco}
              characterImage={rafiki}
              name="Roberta Santos"
              role="Rafiki"
              alt="Roberta SantosRafiki"
            />
            <Actor
              actorImage={zazu_elenco}
              characterImage={zazu}
              name="Naylica Xavier"
              role="Zazu"
              alt="Naylica Xavier como Zazu"
            />
            <Actor
              actorImage={sarabi_elenco}
              characterImage={sarabi}
              name="Ana Ruth"
              role="Sarabi"
              alt="Ana Ruth como Sarabi"
            />
            <Actor
              actorImage={sarafina_elenco}
              characterImage={sarafina}
              name="Lia Nara"
              role="Sarafina"
              alt="Lia Nara como Sarafina"
            />
            <Actor
              actorImage={shenzi_elenco}
              characterImage={shenzi}
              name="Natália Vasconcelos"
              role="Shenzi"
              alt="Natália Vasconcelos como Shenzi"
            />
            <Actor
              actorImage={banzai_elenco}
              characterImage={banzai}
              name="Luís Eduardo"
              role="Banzai"
              alt="Luís Eduardo como Banzai"
            />
            <Actor
              actorImage={ed_elenco}
              characterImage={ed}
              name="Kátia Lemos"
              role="Ed"
              alt="Kátia Lemos como Ed"
            />
            <Actor
              actorImage={bill_elenco}
              characterImage={bill}
              name="Bruna Tayná"
              role="Bill"
              alt="Bruna Tayná como Bill"
            />
          </Carousel>

          <Carousel className="w-full max-w-5xl">
            <Group
              characterImage={leopardo}
              actorsImage={leopardos_elenco}
              name="Leopardos"
              role=""
              alt="Grupo dos Leopardos"
            />

            <Group
              characterImage={zebra}
              actorsImage={zebras_elenco}
              name="Zebras"
              role=""
              alt="Grupo dos Zebras"
            />

            <Group
              characterImage={bird}
              actorsImage={passaros_fita_elenco}
              name="Pássaros"
              role=""
              alt="Grupo dos Pássaros"
            />

            <Group
              characterImage={antilope}
              actorsImage={antilopes_elenco}
              name="Antílopes"
              role=""
              alt="Grupo dos Antílopes"
            />

            <Group
              characterImage={nala_crianca}
              actorsImage={leoas_criancas_elenco}
              name="Leoas Crianças"
              role=""
              alt="Grupo das Leoas Crianças"
            />

            <Group
              characterImage={leoas_jovens}
              actorsImage={leoas_jovens_elenco}
              name="Leoas Jovens"
              role=""
              alt="Grupo dos Leoas Jovens"
            />

            <Group
              characterImage={hienas}
              actorsImage={hienas_elenco}
              name="Hienas (Se Preparem)"
              role=""
              alt="Grupo dos Hienas"
            />

            <Group
              characterImage={flamingos}
              actorsImage={flamingos_elenco}
              name="Flamingos"
              role=""
              alt="Grupo dos Flamingos"
            />

            <Group
              characterImage={gnus}
              actorsImage={gnus_elenco}
              name="Gnus"
              role=""
              alt="Grupo dos Gnus"
            />

            <Group
              characterImage={canto_das_pastagem_elenco}
              actorsImage={canto_das_pastagem_elenco}
              name="Canto das Pastagem"
              role=""
              alt="Grupo do Canto das Pastagem"
            />

            <Group
              characterImage={esta_em_ti_thembas_elenco}
              actorsImage={esta_em_ti_thembas_elenco}
              name="Está em ti (Thembas)"
              role=""
              alt="Grupo dos Gnus"
            />
          </Carousel>
        </div>
      </Section>

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

      {/* <Section
        id="faq"
        title="Dúvidas Frequentes"
        bgColor="bg-bloody-red-800"
        textColor="text-lemon-yellow-100"
      >
        <div className="flex flex-col gap-5 max-md:flex-col max-md:gap-0 max-md:max-w-full max-w-6xl">
          <AccordionDrawer />
        </div>
      </Section> */}

      <Section
        id="apoio"
        title="Apoio"
        bgColor="bg-strong-wood-700"
        textColor="text-lemon-yellow-100"
      >
        <div className="flex lg:gap-8 md:gap-8 sm:gap-2 max-sm:gap-2 lg:flex-row max-lg:flex-row max-sm:flex-col sm:flex-col items-center justify-center max-md:max-w-full lg:max-w-4xl flex-wrap">
          <Image src={idm}
            width={540}
            alt="Logomarca do Instituto Dragão do Mar"
            className="w-[10rem] h-auto"
          />
          <Image src={theatro}
            height={540}
            width={540}
            alt="Logomarca do Theatro José de Alencar"
            className="w-[8rem] h-[8rem]"
          />
          <Image src={secult}
            width={540}
            alt="Logomarca do Ceará Cultura"
            className="w-[9rem] h-auto"
          />
          <Image src={govce}
            width={540}
            alt="Logomarca da Secretaria da Cultura do Ceará"
            className="w-[8rem] h-auto"
          />
          <Image src={adce}
            width={540}
            alt="Logomarca da Associação das Academias de Dança do Ceará"
            className="w-[8rem] h-auto"
          />
          <Image src={konten}
            height={540}
            width={540}
            alt="Logomarca da Konten"
            className="w-[6rem] h-[6rem]"
          />
          <Image src={gutrep}
            width={540}
            alt="Logomarca da Gut.Rep"
            className="w-[10rem] h-auto"
          />
          <Image src={beleza_nossa}
            width={540}
            alt="Logomarca da Beleza Nossa"
            className="w-[12rem] h-auto"
          />
          <Image src={konten_limpeza}
            height={540}
            width={540}
            alt="Logomarca da Konten Limpeza"
            className="w-[6rem] h-[6rem]"
          />
          <Image src={sg_topdecor}
            height={540}
            width={540}
            alt="Logomarca da SG Top Decor"
            className="w-[6rem] h-[6rem]"
          />
        </div>
        {/* <h2
          className="lg:text-2xl md:text-2xl sm:text-xl max-sm:text-xl text-center"
        >
          Patrocínio
        </h2> */}
      </Section>

      <Section
        id="ficha"
        title="Ficha Técnica"
        bgColor="bg-green-900"
        textColor="text-lemon-yellow-100"
      >
        <div className="flex lg:flex-row lg:justify-between lg:items-center md:flex-col md:justify-center md:items-center sm:flex-col sm:justify-center sm:items-center max-sm:flex-col max-sm:justify-center max-sm:items-center gap-6 max-w-3xl max-md:max-w-full">
          <div className="flex flex-col justify-between gap-4">
            <div>
              <span className="font-bold text-lg">Realização:</span>
              <p> Escola de Dança Yaline Sabóia</p>
            </div>
            <div>
              <span className="font-bold text-lg">Direção Geral:</span>
              <p>Yaline Sabóia</p>
            </div>
            <div>
              <span className="font-bold text-lg">Direção Artística:</span>
              <p>Yaline Sabóia</p>
            </div>
            <div>
              <span className="font-bold text-lg">Direção Musical:</span>
              <p>Luana Gabriel</p>
            </div>
            <div>
              <span className="font-bold text-lg">Direção Teatral:</span>
              <p>Yaline Sabóia</p>
              <p>David Barbosa</p>
            </div>
            <div>
              <p><span className="font-bold text-lg">Coreógrafos:</span></p>
              <p>Yaline Sabóia</p>
              <p>Deanira Sabóia</p>
              <p>Jonas Jorge</p>
              <p>Giovana Santos</p>
              <p>Jamyle Oliveira</p>
            </div>

            <div>
              <span className="font-bold text-lg">Administrativo:</span>
              <p>Yasmine Sabóia</p>
            </div>

            <div>
              <span className="font-bold text-lg">Secretária:</span>
              <p>Vonikiany Lemos</p>
            </div>

            <div>
              <span className="font-bold text-lg">Iluminação:</span>
              <p>Jorge Brasil</p>
            </div>

            <div>
              <span className="font-bold text-lg">Figurinista:</span>
              <p>Natália Vasconcelos</p>
            </div>

            <div>
              <span className="font-bold text-lg">Figurinos:</span>
              <p>Meu Bem Dancing</p>
              <p>D&lsquo;Ballet</p>
              <p>Nanda Lia Criações</p>
              <p>Natália Vasconcelos</p>
              <p>Zeneida</p>
            </div>
          </div>

          {/* <div className="flex flex-col justify-between gap-4">


          </div> */}

          <div className="flex flex-col justify-between gap-4">
            {/* <div> */}
            {/* <span className="font-bold text-lg">Cenografia:</span> */}
            {/* <p> </p> */}
            {/* </div> */}

            <div>
              <span className="font-bold text-lg">Equipe Técnica:</span>
              <p>Theatro José de Alencar</p>
            </div>

            <div>
              <span className="font-bold text-lg">Produtor Sonoplasta:</span>
              <p>RMIX Studio</p>
            </div>

            <div>
              <span className="font-bold text-lg">Maquiagem:</span>
              <p>Natália Vasconcelos</p>
              <p>Ana Ruth Ramos</p>
              <p>Deanira Sabóia</p>
              <p>Luana Gabriel</p>
              <p>Roberta Santos</p>
            </div>

            <div>
              <span className="font-bold text-lg">Marketing:</span>
              <p>Letícia Reis e Ana Ruth Ramos</p>
            </div>
            <div>
              <span className="font-bold text-lg">Site:</span>
              <p>Jacó Martins e Letícia Reis</p>
            </div>
            <div>
              <span className="font-bold text-lg">Mídias Sociais:</span>
              <p>Ana Lívia Alves</p>
              <p>Rikelme Pereira</p>
              <p>Letícia Reis</p>
              <p>Ana Ruth Ramos</p>
              <p>Jacó Martins</p>
              <p>Pedro Yuri</p>
              <p>Cauan Victor</p>
            </div>

            <div>
              <span className="font-bold text-lg">Apoio: </span>
              <p>Amanda Maria</p>
              <p>Associação das Academias de dança do Ceará</p>
              <p>Ceará Cultura</p>
              <p>Gut.Rep</p>
              <p>Instituto Dragão do Mar</p>
              <p>Jôsi Beleza Nossa</p>
              <p>Konten Contabilidade</p>
              <p>Konten Limpeza</p>
              <p>Secretaria da Cultura do Estado do Ceará</p>
              <p>SG Top Decor</p>
              <p>Theatro José de Alencar</p>
            </div>
          </div>

          <div>

          </div>
        </div>
      </Section>
    </main >
  );
}
