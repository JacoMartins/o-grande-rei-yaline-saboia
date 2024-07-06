import Image from "next/image";
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const berlin = localFont({ src: '../assets/fonts/BerlinSansFB-Regular.ttf' });

export default function Home() {
  return (
    <main className={`flex flex-col bg-white ${berlin.className}`}>
      <div className="flex justify-center items-center px-16 py-6 w-full bg-amber-400 text-stone-900 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-w-[1664px] max-md:flex-wrap max-md:max-w-full">
          <div className="text-4xl">O Grande Rei</div>
          <div className="flex gap-5 justify-between my-auto text-2xl max-md:flex-wrap max-md:max-w-full">
            <div>Início</div>
            <div>O musical</div>
            <div>Nossa História</div>
            <div>Ingressos</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full bg-red-950 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/87c49bc74e396046acaf9191d0cb0f34ecc2da06752f2e29debd00a8ea54d48e?apiKey=651682418c2c47b48275304708df7bfa&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/87c49bc74e396046acaf9191d0cb0f34ecc2da06752f2e29debd00a8ea54d48e?apiKey=651682418c2c47b48275304708df7bfa&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/87c49bc74e396046acaf9191d0cb0f34ecc2da06752f2e29debd00a8ea54d48e?apiKey=651682418c2c47b48275304708df7bfa&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/87c49bc74e396046acaf9191d0cb0f34ecc2da06752f2e29debd00a8ea54d48e?apiKey=651682418c2c47b48275304708df7bfa&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/87c49bc74e396046acaf9191d0cb0f34ecc2da06752f2e29debd00a8ea54d48e?apiKey=651682418c2c47b48275304708df7bfa&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/87c49bc74e396046acaf9191d0cb0f34ecc2da06752f2e29debd00a8ea54d48e?apiKey=651682418c2c47b48275304708df7bfa&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/87c49bc74e396046acaf9191d0cb0f34ecc2da06752f2e29debd00a8ea54d48e?apiKey=651682418c2c47b48275304708df7bfa&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/87c49bc74e396046acaf9191d0cb0f34ecc2da06752f2e29debd00a8ea54d48e?apiKey=651682418c2c47b48275304708df7bfa&"
          className="w-full aspect-[3.03] max-md:max-w-full"
        />
      </div>
      <div className="flex justify-center items-center px-16 py-20 w-full text-center bg-amber-400 text-red-950 max-md:px-5 max-md:max-w-full">
        <div className="flex justify-center items-center px-16 w-full max-w-[1664px] max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col w-full max-w-3xl">
            <div className="self-center text-4xl max-md:text-4xl">
              O musical
            </div>
            <div className={`mt-12 text-2xl max-md:mt-10 max-md:max-w-full ${inter.className}`}>
              Irrompe com cores gloriosas, efeitos impressionantes e música
              encantadora. O espetáculo conta a história poderosa de Simba em
              sua jornada de um pequeno filhote ansioso para se tornar rei até o
              encontro com seu majestoso destino nas Terras do Reino.
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-20 w-full bg-orange-200 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-screen-2xl max-md:max-w-full">
          <div className="self-center text-5xl text-red-950 max-md:text-4xl">
            Elenco
          </div>
          <div className="flex flex-wrap justify-center content-start items-center px-16 mt-24 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[1138px]">
              <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col grow justify-end p-2 w-full rounded-xl bg-red-950 max-md:mt-10 max-w-xs">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e5828156d1fe003100f505fc8ffdfd38e5db7dfc5ba1616715d73da69fd1fdb2?apiKey=651682418c2c47b48275304708df7bfa&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5828156d1fe003100f505fc8ffdfd38e5db7dfc5ba1616715d73da69fd1fdb2?apiKey=651682418c2c47b48275304708df7bfa&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5828156d1fe003100f505fc8ffdfd38e5db7dfc5ba1616715d73da69fd1fdb2?apiKey=651682418c2c47b48275304708df7bfa&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5828156d1fe003100f505fc8ffdfd38e5db7dfc5ba1616715d73da69fd1fdb2?apiKey=651682418c2c47b48275304708df7bfa&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5828156d1fe003100f505fc8ffdfd38e5db7dfc5ba1616715d73da69fd1fdb2?apiKey=651682418c2c47b48275304708df7bfa&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5828156d1fe003100f505fc8ffdfd38e5db7dfc5ba1616715d73da69fd1fdb2?apiKey=651682418c2c47b48275304708df7bfa&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5828156d1fe003100f505fc8ffdfd38e5db7dfc5ba1616715d73da69fd1fdb2?apiKey=651682418c2c47b48275304708df7bfa&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5828156d1fe003100f505fc8ffdfd38e5db7dfc5ba1616715d73da69fd1fdb2?apiKey=651682418c2c47b48275304708df7bfa&"
                      className="w-full aspect-[0.75]"
                    />
                    <div className="flex flex-col p-2">
                      <div className="text-2xl text-white">Isaque Silva</div>
                      <div className={`text-md text-base text-orange-200 ${inter.className}`}>
                        Simba Adulto
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-20 w-full text-3xl text-amber-400 bg-red-900 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center max-w-full w-[616px]">
          <div className="text-5xl max-md:text-4xl">Dúvidas Frequentes</div>
          <div className="flex gap-5 justify-between items-center self-stretch mt-12 whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="justify-center self-stretch px-5 py-2 text-red-900 bg-amber-400 rounded-lg">
              Ingressos
            </div>
            <div className="self-stretch my-auto">Pagamentos</div>
            <div className="self-stretch my-auto">Acessibilidade</div>
          </div>
          <div className="flex gap-2.5 justify-between mt-12 max-w-full text-orange-400 whitespace-nowrap w-[362px] max-md:mt-10">
            <div>Question</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7daa0c5cf5d5513e730add2e15ed419a6c8645ba15ad0b992e9a4d2035e52229?apiKey=651682418c2c47b48275304708df7bfa&"
              className="shrink-0 my-auto w-8 aspect-square"
            />
          </div>
          <div className="shrink-0 mt-2.5 max-w-full h-0.5 bg-orange-400 bg-opacity-50 w-[362px]" />
          <div className="flex gap-2.5 justify-between mt-3 max-w-full text-orange-400 whitespace-nowrap w-[362px]">
            <div>Question</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7daa0c5cf5d5513e730add2e15ed419a6c8645ba15ad0b992e9a4d2035e52229?apiKey=651682418c2c47b48275304708df7bfa&"
              className="shrink-0 my-auto w-8 aspect-square"
            />
          </div>
          <div className="shrink-0 mt-2.5 max-w-full h-0.5 bg-orange-400 bg-opacity-50 w-[362px]" />
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-20 w-full bg-amber-400 max-md:px-5 max-md:max-w-full">
        <div className="flex justify-center items-center px-16 w-full max-w-[1664px] max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col items-center max-w-full w-[643px]">
            <div className="text-5xl text-center text-red-950 max-md:text-4xl">
              Nossos Eventos
            </div>
            <div className="justify-center mt-20 max-w-full w-[518px] max-md:mt-10">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-red-950 max-md:mt-10">
                    <div className="text-xl text-center">01 de novembro</div>
                    <div className="mt-2.5 text-2xl">Músical</div>
                    <div className="text-4xl text-center">O Grandei Rei</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-end self-stretch pl-20 my-auto text-red-950 max-md:mt-10">
                    <div className="self-start ml-4 text-xl font-medium text-center max-md:ml-2.5">
                      Ingresso único
                    </div>
                    <div className="flex gap-1.5 self-end mt-1 whitespace-nowrap">
                      <div className="text-2xl">R$</div>
                      <div className="text-4xl leading-8 text-center">
                        22,50
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 justify-center self-stretch mt-12 text-2xl text-center text-red-950 max-md:flex-wrap max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e3f85314d115f1de5d788b53a2b0283063897d4a21f1f571ccf4d89a54889a6?apiKey=651682418c2c47b48275304708df7bfa&"
                className="shrink-0 self-start w-6 aspect-square"
              />
              <div className="max-md:max-w-full">
                Evento presencial em Theatro José de Alencar, Fortaleza - CE
              </div>
            </div>
            <div className="flex gap-4 justify-center px-5 py-2 mt-12 text-3xl text-amber-400 bg-red-900 rounded-lg max-md:flex-wrap max-md:mt-10">
              <div className="max-md:max-w-full">
                Garanta já o seu Ingresso no Sympla
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1207a20adcfbd240fffb83511bc1fc7ab906f9cc6966473ef4269b3769a2e28?apiKey=651682418c2c47b48275304708df7bfa&"
                className="shrink-0 my-auto w-8 aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-12 w-full bg-red-950 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 w-full max-w-[1408px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col justify-center text-3xl text-center text-amber-400">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3b3c4a299b0f2262c72a7d79cfd2b96bd1833a49852c9adc7961d155a950535d?apiKey=651682418c2c47b48275304708df7bfa&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b3c4a299b0f2262c72a7d79cfd2b96bd1833a49852c9adc7961d155a950535d?apiKey=651682418c2c47b48275304708df7bfa&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b3c4a299b0f2262c72a7d79cfd2b96bd1833a49852c9adc7961d155a950535d?apiKey=651682418c2c47b48275304708df7bfa&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b3c4a299b0f2262c72a7d79cfd2b96bd1833a49852c9adc7961d155a950535d?apiKey=651682418c2c47b48275304708df7bfa&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b3c4a299b0f2262c72a7d79cfd2b96bd1833a49852c9adc7961d155a950535d?apiKey=651682418c2c47b48275304708df7bfa&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b3c4a299b0f2262c72a7d79cfd2b96bd1833a49852c9adc7961d155a950535d?apiKey=651682418c2c47b48275304708df7bfa&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b3c4a299b0f2262c72a7d79cfd2b96bd1833a49852c9adc7961d155a950535d?apiKey=651682418c2c47b48275304708df7bfa&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b3c4a299b0f2262c72a7d79cfd2b96bd1833a49852c9adc7961d155a950535d?apiKey=651682418c2c47b48275304708df7bfa&"
              className="self-center aspect-[2] w-[197px]"
            />
            <div className="mt-2.5">O Grande Rei</div>
          </div>
          <div className="flex-1 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="text-base text-orange-400 underline max-md:mt-10 max-md:max-w-full">
                  <span className="text-xl font-semibold">Acesso Rápido</span>
                  <br />
                  <br />
                  <span className="text-xl">Início</span>
                  <br />
                  <span className="text-xl">O musical</span>
                  <br />
                  <span className="text-xl">Nossa História</span>
                  <br />
                  <span className="text-xl">Dúvidas Frequentes</span>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex gap-5 justify-between self-stretch my-auto max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-col text-orange-400">
                    <div className="text-3xl">Siga-nos no Instagram</div>
                    <div className="mt-1 text-xl">
                      Acompanhe as nossas novidades
                    </div>
                  </div>
                  <div className="flex justify-center items-center p-1.5 my-auto w-12 h-12 bg-orange-400 rounded-2xl">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/25af5142f16749e843577b726ca19e6a8cfbcfe8b062743be18d4eb26e823d2d?apiKey=651682418c2c47b48275304708df7bfa&"
                      className="w-7 aspect-square fill-red-950"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-5 w-full text-xl text-orange-200 bg-stone-900 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-w-[1408px] max-md:flex-wrap max-md:max-w-full">
          <div className="max-md:max-w-full">
            Website by Jacó Martins, Letícia Reis & Cauan Victor
          </div>
          <div>© Yaline Sabóia, 2024.</div>
        </div>
      </div>
    </main>
  );
}
