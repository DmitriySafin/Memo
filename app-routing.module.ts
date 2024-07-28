import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from 'src/app/components/card/card.component';
import { ContactComponent } from 'src/app/components/contact/contact.component';
import { GraphComponent } from 'src/app/components/graph/graph.component';
import { NewsComponent } from 'src/app/components/news/news.component';


const routes: Routes = [
{path:'', component: CardComponent},
{path:'news', component: NewsComponent},
{path:"contact", component: ContactComponent},
{path: "graph", component: GraphComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }