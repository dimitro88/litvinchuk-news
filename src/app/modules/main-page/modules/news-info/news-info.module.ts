import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsInfoRoutingModule } from './news-info-routing.module';
import { NewsInfoComponent } from './news-info.component';


@NgModule({
  declarations: [NewsInfoComponent],
  imports: [
    CommonModule,
    NewsInfoRoutingModule
  ]
})
export class NewsInfoModule { }
