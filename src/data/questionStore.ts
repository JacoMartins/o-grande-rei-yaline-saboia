interface QuestionStore {
    [key: string]: {
        [key: string]: string;
    }
}

const questions: QuestionStore = {
    "Ingressos": {
        "Como garanto o meu ingresso?": "Para garantir o seu ingresso, basta acessar o site do Sympla na seção abaixo e realizar a compra.",
    },
    "Pagamentos": {
        "Question": "Resposta",
    },
    "Acessibilidade": {
        "Question": "Resposta",
    }
}

export default questions;