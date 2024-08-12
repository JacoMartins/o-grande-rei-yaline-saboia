interface QuestionStore {
    [key: string]: {
        [key: string]: JSX.Element;
    }
}

const questions: QuestionStore = {
    "Ingressos": {
        "Como garanto o meu ingresso?": <>
            <p>Para garantir o seu ingresso, basta acessar o site do Sympla na seção acima e realizar a compra.</p>
            <br></br>
            <p>
                Também pode ser feita na recepção na sede da Escola de Dança Yaline Saboia: <a href="https://maps.app.goo.gl/f8cTLNrSvBz9ozJB6" className="underline" target="_blank">Rua Professor Otoní 25 - Maraponga, Fortaleza/Ce.</a>
            </p>
            <br></br>
            <p>
                E por fim, a compra também pode ser feita através do nosso WhatsApp: <a href="https://wa.me/5585998552222" className="underline" target="_blank">(85) 9 9855-2222</a>.
            </p>
        </>,
        "Como garanto a minha meia entrada?": <>
            <p>ESTUDANTES: para ter acesso ao benefício da meia-entrada, o estudante deve apresentar a CIE – Carteira de Identificação Estudantil</p>
            <br></br>
            <p>IDOSOS: com idade superior a 60 (sessenta) anos têm direito a meia-entrada. Para comprovação, basta apresentar o documento de identidade.</p>
            <br></br>
            <p>PCD: pessoas com deficiência e um acompanhante, tem direito a meia-entrada. O documento exigido no local de realização do evento para pessoas com necessidades especiais, será:</p>
            <br></br>
            <p>a) O cartão de Benefício de Prestação Continuada da Assistência Social da pessoa com deficiência; ou</p>
            <br></br>
            <p>b) Documento emitido pelo Instituto Nacional do Seguro Social - INSS que ateste a aposentadoria de acordo com os critérios estabelecidos na Lei Complementar nº 142, de 8 de maio de 2013.</p>
            <br></br>
            <p>JOVENS DE BAIXA RENDA: também terão direito a meia-entrada, jovens com idade entre 15 e 29 anos que pertencem às famílias com renda mensal de até dois salários mínimos, inscritas no Cadastro Único para Programas Sociais do Governo Federal - CadÚnico;</p>
            <br></br>
            <p>DOADORES DE SANGUE</p>
            <br></br>
            <p>No Ceará, a Lei Estadual nº 13.249/2002 assegura a doadores de sangue regulares o direito ao pagamento de meia-entrada em todos os locais públicos de cultura, esporte e lazer geridos direta ou indiretamente pelo Governo do Estado.</p>
            <br></br>
            <p>O doador deve estar registrado no Hemoce e nos Bancos de Sangue dos Hospitais do Estado, e será identificado por carteira/documento oficial expedido pela Secretaria Estadual da Saúde (Sesa), comprovando a regularidade das doações.</p>
            <br></br>
            <p>PROFESSORES MUNICIPAIS DE FORTALEZA</p>
            <br></br>
            <p>Além de estudantes, os educadores da rede municipal de ensino de Fortaleza também têm direito ao pagamento de meia-entrada em cinemas, teatros e exposições artísticas na Capital. O benefício é válido desde 2007, por meio da Lei Municipal n° 9.214.</p>
            <br></br>
            <p>Os docentes devem comprovar o vínculo por meio de carteira funcional emitida pela Secretaria Municipal de Educação (SME), que precisa ser renovada a cada 4 anos, conforme a legislação.</p>
        </>,
    },
    "Pagamentos": {
        "Como faço para garantir meus ingressos?": <>
            <p>Os ingressos são vendidos na bilheteria oficial, localizada no <a href="https://maps.app.goo.gl/y13UpbhPABNSDiC2A">Theatro José de Alencar, Fortaleza - CE</a>.</p>
            <p>Você também pode comprar pelo site ou pelo nosso <a href="https://wa.me/5585998552222" className="underline">whatsapp oficial</a>, e também presencialmente na <a href="https://maps.app.goo.gl/f8cTLNrSvBz9ozJB6" className="underline" target="_blank">nossa sede</a>.</p>
        </>,
        "Quais as formas de pagamento?": <>
            <p>Bilheteria (sem taxas): Dinheiro, cartões de crédito American Express®, Visa, MasterCard, Diners, Hipercard, ELO e cartões de débito Visa Electron, MasterCard, Hipercard e ELO. Vale-Cultura (Sodexo). Site (com taxas): Cartões de crédito American Express®, Visa, MasterCard, Diners, Hipercard e ELO.</p>
        </>,
    },
    "Acessibilidade": {
        "O espetáculo conta com recursos de acessibilidade?": <>
            <p>Sim! O espetáculo conta com libras e audiodescrição em todas as sessões.</p>
            <p>A acessibilidade em libras e audiodescrição é inserida no Tablet para exibição.</p>
            <p>Não é necessário solicitar com antecedência, basta notificar em sua chegada ao teatro a necessidade para a equipe técnica responsável pela distribuição e acompanhamento dos PCDs. Essa equipe fica localizada no foyer do teatro em local sinalizado.</p>
            <p>Além disso, o teatro é equipado com:</p>
            <br />
            <p>- 19 lugares para cadeirantes</p>
            <p>- 18 lugares para acompanhantes</p>
            <p>- 16 lugares para obeso</p>
            <p>- Rampa de acesso até a fileira N</p>
            <p>- Elevador com acesso aos dois andares da casa (plateia e balcão)</p>
            <p>- Bombeiros que auxiliam no acesso a casa</p>
            <p>- Banheiros PCD, conforme NBR9050</p>
            <p>- Libras e audiodescrição em todas as sessões</p>
        </>,
    }
}

export default questions;