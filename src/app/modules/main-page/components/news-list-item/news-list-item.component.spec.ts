import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListItemComponent } from './news-list-item.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('NewsListItemComponent', () => {
  let component: NewsListItemComponent;
  let fixture: ComponentFixture<NewsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsListItemComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
