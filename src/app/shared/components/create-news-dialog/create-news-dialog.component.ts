import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DatabaseService} from '../../services/database.service';
import {DatabaseTablesEnum} from '../../enums/databaseTables.enum';
import {ArticlesService} from '../../services/articles.service';
import {Article} from '../../interfaces/article.interface';

@Component({
  selector: 'app-create-news-dialog',
  templateUrl: './create-news-dialog.component.html',
  styleUrls: ['./create-news-dialog.component.scss']
})
export class CreateNewsDialogComponent implements OnInit {
  public createArticleForm: FormGroup = new FormGroup({
    heading: new FormControl('', Validators.required),
    shortDescription: new FormControl('', Validators.required),
    fullDescription: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    source: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),
  });

  constructor(
    public dialogRef: MatDialogRef<CreateNewsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private databaseService: DatabaseService,
    private articlesService: ArticlesService,
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    const savedArticle: Article = this.databaseService.saveEntity(DatabaseTablesEnum.Articles, this.createArticleForm.value);
    if (savedArticle) {
      this.articlesService.addSource(savedArticle.source);
      this.articlesService.addArticle(savedArticle);
    }
    this.close();
  }

}
