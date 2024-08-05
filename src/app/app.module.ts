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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { NewsAsuComponent } from './components/news/news-asu/news-asu.component';
import { NewsMarketingComponent } from './components/news/news-marketing/news-marketing.component';
import { NewsSbytComponent } from './components/news/news-sbyt/news-sbyt.component';
import { NewsSertComponent } from './components/news/news-sert/news-sert.component';
import { NewsKontrolComponent } from './components/news/news-kontrol/news-kontrol.component';
import { NewsSborComponent } from './components/news/news-sbor/news-sbor.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NewsComponent,
    GraphComponent,
    HeaderComponent,
    FooterComponent,
    NewsAsuComponent,
    NewsMarketingComponent,
    NewsSbytComponent,
    NewsSertComponent,
    NewsKontrolComponent,
    NewsSborComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
