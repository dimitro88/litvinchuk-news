import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsComponent} from './news.component';


const routes: Routes = [{
  path: '',
  component: NewsComponent,
  children: [
    {
      path: ':id',
      loadChildren: () => import('./modules/news-by-id/news-by-id.module').then(m => m.NewsByIdModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
