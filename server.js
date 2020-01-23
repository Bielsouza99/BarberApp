const express = require('express');
const bodyParser = require('body-parser');
const Pusher = require('pusher');
const cors = require('cors');
const dialogFlow = require('./dialogflow');
require('dotenv').config();
const shortId = require('shortid');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const pusher = new Pusher({
    appId: process.env.PUSHER_APPID,
    key: process.env.PUSHER_APPKEY,
    secret:process.env.PUSHER_APPSECRET,
    cluster: 'us2',
    encrypted: true
})

app.post('/mensagem', async (req, res) => {
    console.log(req.body);
    const chat = {
        mensagem: req.body.mensagem,
        tipo: 'humano',
        id: shortId.generate(),
        criadoEm: new Date().toISOString()
    }

    pusher.trigger('chatbot', 'chat', chat)

    const mensagem = chat.mensagem;
    const response = await dialogFlow.enviar(mensagem);

    pusher.trigger('chatbot', 'chat', {
        mensagem: `${response.data.result.fulfillment.speech}`,
        tipo: 'bot',
        criadoEm: new Date().toISOString(),
        id: shortId.generate()
    })
    res.send(chat);
})

app.listen(process.env.PORT || 5000, () => console.log('Rodando na porta 5000'));
