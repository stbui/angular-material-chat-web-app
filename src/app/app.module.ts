import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface } from "angular2-perfect-scrollbar";
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryChatDbService } from './chat/data/chat.db'

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ContentComponent } from './chat/content/content.component';
import { ContactsComponent } from './chat/contacts/contacts.component';
import { ChatService } from './chat/chat.service';


const perfectScrollbarConfig: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ContentComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule,
    PerfectScrollbarModule.forRoot(perfectScrollbarConfig),
    InMemoryWebApiModule.forRoot(InMemoryChatDbService)
  ],
  providers: [
    { provide: 'ChatService', useClass: ChatService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
