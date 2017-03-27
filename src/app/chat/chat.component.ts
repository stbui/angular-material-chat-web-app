import {Component, OnInit, ViewChild, ViewEncapsulation, Inject, ElementRef} from '@angular/core';
import {PerfectScrollbarComponent} from "angular2-perfect-scrollbar";
import {fadeInAnimation} from "../route.animation";

@Component({
  selector: 'ms-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    "[@fadeInAnimation]": 'true'
  },
  animations: [ fadeInAnimation ]
})
export class ChatComponent implements OnInit {

  chats: any[];
  activeChat: any;
  messages:any[];

  @ViewChild('chatScroll') private chatScroll: PerfectScrollbarComponent;

  constructor(@Inject('ChatService') private service) { }

  ngOnInit() {
    this.getChats();
    // setTimeout(() => {
    //   this.chatScroll.elementRef.nativeElement.scrollTop = this.chatScroll.elementRef.nativeElement.scrollHeight;
    // }, 0);
  }

  getChats() {
    this.service
      .getChats()
      .subscribe(res=>{
      this.chats = res;
      this.activeChat = res[0];
      this.messages = this.activeChat.messages;
    });
  }

  onActiveChat(chat) {
    this.activeChat = chat;
    this.messages = chat.messages;
  }
}
