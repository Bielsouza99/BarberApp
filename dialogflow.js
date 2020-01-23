const axios = require('axios');
const accessToken = process.env.DIALOGFLOW_TOKEN;
const baseURL = 'https://api.dialogflow.com/v1/query?v=20150910';

module.exports = {
    enviar (mensagem) {
        const data = {
            query: mensagem,
            lang: 'pt-BR',
            sessionId: '123456789!@#$%'
        }
        return axios.post(baseURL, data, {
            headers: { Authorization: `Bearer ${accessToken}`}
        })
    }
}

