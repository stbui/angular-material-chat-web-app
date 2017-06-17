import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "@angular/material";
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface } from "angular2-perfect-scrollbar";
// test
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryChatDbService } from './data/chat.db'

import { ChatService } from './chat.service';
import { ChatComponent } from './chat.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContentComponent } from './content/content.component';


const perfectScrollbarConfig: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    PerfectScrollbarModule.forRoot(perfectScrollbarConfig),
    InMemoryWebApiModule.forRoot(InMemoryChatDbService)
  ],
  declarations: [
    ChatComponent,
    ContactsComponent,
    ContentComponent
  ],
  exports: [
    ChatComponent,
  ],
  providers: [
    { provide: 'ChatService', useClass: ChatService }
  ]
})
export class ChatsModule { }
