import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ContactComponent } from './components/contact/contact.component';
import { NewsComponent } from './components/news/news.component';
import { GraphComponent } from './components/graph/graph.component';
import { HeaderComponent } from './components/header/header.component';
import { ShareModule } from './share/share.module';
import { AppRoutingModule } from 'app-routing.module';
import { CoreModule } from './service/service.module';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ContactComponent,
    NewsComponent,
    GraphComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ShareModule,
    AppRoutingModule,
    CoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
