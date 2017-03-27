import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/toPromise';
import { Chat } from './chat.model';

@Injectable()
export class ChatService {

  public api = 'api/chat';
  private header = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  addChat(chat) {
    let url = `${this.api}/${chat.name}`;

    return this.http
      .post(url, JSON.stringify(chat), {headers: this.header})
      .map(res => res.json().data as Chat[]);
  }

  getChats(): Observable<any> {
    return this.http.get(this.api).map(res => res.json().data as Chat[]);
  }

  // getChats(): Promise<Chat> {
  //   return this.http
  //     .get(this.api)
  //     .toPromise()
  //     .then(res => res.json().data as Chat[])
  //     .catch(this.handleError);
  // }

  // handleError(error: any) {
  //   console.error('An error occurred', error);
  //   return Promise.reject(error.message || error);
  // }

}
