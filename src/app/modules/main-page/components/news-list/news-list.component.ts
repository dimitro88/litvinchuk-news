import {Component, OnInit} from '@angular/core';
import {Article} from '../../../../shared/interfaces/article.interface';
import {ArticlesService} from '../../../../shared/services/articles.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  public articles: Article[];

  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {
    this.articlesService.getFilteredArticles().subscribe(filteredArticles => {
      this.articles = filteredArticles;
    });
    this.articlesService.getCurrentArticles().subscribe(articles => {
      this.articles = articles;
    });
  }

}
