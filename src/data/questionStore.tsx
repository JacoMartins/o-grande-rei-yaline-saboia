interface QuestionStore {
    [key: string]: {
        [key: string]: JSX.Element;
    }
}

const questions: QuestionStore = {
    "Ingressos": {
        "Como garanto o meu ingresso?": <>
            <p>Para garantir o seu ingresso, basta acessar o site do Sympla na seção acima e realizar a compra.</p>
        </>,
        "Como garanto a minha meia entrada?": <>
            <p>ESTUDANTES</p>
            <br></br>
            <p>Para ter acesso ao benefício da meia-entrada, o estudante deve apresentar a CIE – Carteira de Identificação Estudantil</p>
            <br></br>
            <p>IDOSOS</p>
            <br></br>
            <p>Idosos com idade superior a 60 (sessenta) anos têm direito a meia-entrada. Para comprovação, basta apresentar o documento de identidade.</p>
            <br></br>
            <p>PCD</p>
            <br></br>
            <p>Pessoas com deficiência e um acompanhante, tem direito a meia-entrada. O documento exigido no local de realização do evento para pessoas com necessidades especiais, será:</p>
            <br></br>
            <p>a) O cartão de Benefício de Prestação Continuada da Assistência Social da pessoa com deficiência; ou</p>
            <br></br>
            <p>b) Documento emitido pelo Instituto Nacional do Seguro Social - INSS que ateste a aposentadoria de acordo com os critérios estabelecidos na Lei Complementar nº 142, de 8 de maio de 2013.</p>
            <br></br>
            <p>JOVENS DE BAIXA RENDA</p>
            <br></br>
            <p>Também terão direito a meia-entrada, jovens com idade entre 15 e 29 anos que pertencem às famílias com renda mensal de até dois salários mínimos, inscritas no Cadastro Único para Programas Sociais do Governo Federal - CadÚnico;</p>
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
        "Quais as formas de pagamento?": <>
            <p>Bilheteria (sem taxas): Dinheiro, cartões de crédito e PIX.</p>
        </>,
    },
    
}

export default questions;