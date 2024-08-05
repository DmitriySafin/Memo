import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from 'src/app/components/news/news.component'; 
import { NewsAsuComponent } from '../news-asu/news-asu.component';
import { NewsMarketingComponent } from '../news-marketing/news-marketing.component';
import { NewsSbytComponent } from '../news-sbyt/news-sbyt.component';
import { NewsSborComponent } from '../news-sbor/news-sbor.component';
import { NewsSertComponent } from '../news-sert/news-sert.component';
import { NewsKontrolComponent } from '../news-kontrol/news-kontrol.component';

const routes: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full' }, // Редирект на главную новость
  { path: 'news', component: NewsComponent }, 
  { path: 'news/asu', component: NewsAsuComponent }, 
  { path: 'news/marketing', component: NewsMarketingComponent },
  { path: "news/sbyt", component: NewsSbytComponent },
  { path: "news/sborka", component: NewsSborComponent },
  { path: "news/sertificate", component: NewsSertComponent },
  { path: 'news/kontrol', component: NewsKontrolComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SidebarRoutingModule { }