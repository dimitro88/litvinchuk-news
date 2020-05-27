import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Article} from '../../../../shared/interfaces/article.interface';
import {DatabaseService} from '../../../../shared/services/database.service';
import {DatabaseTablesEnum} from '../../../../shared/enums/databaseTables.enum';

@Component({
  selector: 'app-news-by-id',
  templateUrl: './news-by-id.component.html',
  styleUrls: ['./news-by-id.component.scss']
})
export class NewsByIdComponent implements OnInit {
  public article: Article;
  public paramId: string;

  constructor(
    private route: ActivatedRoute,
    private databaseService: DatabaseService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.paramId = this.route.snapshot?.params?.id;
      this.getArticleInfo(this.paramId);
    });
  }

  getArticleInfo(id: string): void {
    this.article = this.databaseService.getById(DatabaseTablesEnum.Articles, id);
  }

}
