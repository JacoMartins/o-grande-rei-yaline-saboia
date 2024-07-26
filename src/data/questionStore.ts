interface QuestionStore {
    [key: string]: {
        [key: string]: string;
    }
}

const questions: QuestionStore = {
    "Ingressos": {
        "Como garanto o meu ingresso?": "Para garantir o seu ingresso, basta acessar o site do Sympla na seção acima e realizar a compra.",
        "Como garanto a minha meia entrada?": "Para garantir a meia entrada, basta apresentar a carteirinha de estudante ou o comprovante de matrícula no ato da compra e na entrada do evento.",
    },
    "Pagamentos": {
        "Pergunta": "Resposta",
    },
    "Acessibilidade": {
        "Pergunta": "Resposta",
    }
}

export default questions;