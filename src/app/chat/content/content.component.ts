import { Component, Input, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() chatSidenav;
  @Input() activeChat;
  @Input() messages;

  newMessage;

  constructor(@Inject('ChatService') private service) {
  }

  ngOnInit() {
  }

  send() {
    if (this.newMessage) {
      let chat = {
        message: this.newMessage,
        when: new Date(),
        who: 'me'
      }

      this.activeChat.messages.push(chat);
      this.service.addChat(this.activeChat)

      this.newMessage = '';
    }
  }

  clearMessages(activeChat) {
    activeChat.messages.length = 0;
  }

  onChatSideTriggered() {
    this.chatSidenav.toggle();
  }

}
