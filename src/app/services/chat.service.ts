import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { PusherService } from './pusher.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';
import { BehaviorSubject } from 'rxjs';

export class Mensagem {
  constructor(public conteudo: string, public enviadaPor: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  readonly token = environment.dialogflow.barberClan;
  readonly client = new ApiAiClient({accessToken: this.token });

  conversation = new BehaviorSubject<Mensagem[]>([]);

  constructor() {}

  conversa (msg: string) {
    const mensagemUsuario = new Mensagem(msg, 'usuario');
    this.atualizar(mensagemUsuario);

    return this.client.textRequest(msg)
      .then(res => {
        const speech = res.result.fulfillment.speech;
        const mensagemBot = new Mensagem(speech, 'bot');
        this.atualizar(mensagemBot);
      });
  }

  atualizar(msg: Mensagem) {
    this.conversation.next([msg]);
  }

  // private url = 'http://localhost:5000';
  // private channel: any;

  // constructor(public http: HttpClient, private pusher: PusherService) {
  //   this.channel = this.pusher.getPusher().subscribe('chatbot');
  // }

  // enviarMensagem(mensagem: string) : Observable<any> {
  //   const param = {
  //     tipo: 'humano',
  //     mensagem
  //   };
  //   return this.http.post(`${this.url}/mensagem`, param);
  // }

  // getChannel() {
  //   return this.channel;
  // }
}
