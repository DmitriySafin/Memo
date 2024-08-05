    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
import { NewsComponent } from '../news.component';
import { NewsAsuComponent } from '../news-asu/news-asu.component';
import { NewsMarketingComponent } from '../news-marketing/news-marketing.component';
import { NewsSbytComponent } from '../news-sbyt/news-sbyt.component';
import { NewsSborComponent } from '../news-sbor/news-sbor.component';
import { NewsSertComponent } from '../news-sert/news-sert.component';
import { NewsKontrolComponent } from '../news-kontrol/news-kontrol.component';
import { SidebarRoutingModule } from '../sidebar/sidebar.module';
    @NgModule({
      declarations: [
        NewsComponent,
        NewsAsuComponent,
        NewsMarketingComponent,
        NewsSbytComponent,
        NewsSborComponent,
        NewsSertComponent,
        NewsKontrolComponent
      ],
      imports: [
        CommonModule,
        SidebarRoutingModule, 
      ]
    })
    export class NewsModule { } // Убедитесь, что этот экспорт существует