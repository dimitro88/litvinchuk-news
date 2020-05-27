import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewsDialogComponent } from './create-news-dialog.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

describe('CreateNewsDialogComponent', () => {
  let component: CreateNewsDialogComponent;
  let fixture: ComponentFixture<CreateNewsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewsDialogComponent ],
      providers: [{
        provide: MAT_DIALOG_DATA, useValue: [],
      }, {
        provide: MatDialogRef, useValue: {}
      }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
