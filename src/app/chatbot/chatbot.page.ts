import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ChatService, Mensagem } from '../services/chat.service';
//import 'rxjs/add/operator/scan';
import { scan } from 'rxjs/operators';
// import { Chat } from './../../models/chatModel';
// import { NavController } from '@ionic/angular'
//IonicPage
@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.page.html',
  styleUrls: ['./chatbot.page.scss'],
})
export class ChatbotPage implements OnInit {
  mensagens: Observable<Mensagem[]>
  mensagem: string;

  constructor(public chat: ChatService) { }


  ngOnInit() {
    this.mensagens = this.chat.conversation.asObservable().pipe(scan((acc, val) => acc.concat(val)));
  }

  enviarMensagem() {
    this.chat.conversa(this.mensagem);
    this.mensagem = '';
  }
}
