import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const Pusher: any;
@Injectable({
  providedIn: 'root'
})
export class PusherService {

  public pusher: any;
  constructor(public http: HttpClient) { 
    this.pusher = new Pusher('56c9fa74593e421143b6', {
      cluster: 'us2',
      encrypted: true
    });
  }

  getPusher() {
    return this.pusher;
  }
}
