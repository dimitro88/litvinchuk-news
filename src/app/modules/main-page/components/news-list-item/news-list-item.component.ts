import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../../../shared/interfaces/article.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news-list-item',
  templateUrl: './news-list-item.component.html',
  styleUrls: ['./news-list-item.component.scss']
})
export class NewsListItemComponent implements OnInit {
  @Input() newsItem: Article;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public redirectToArticlePage(): void {
    this.router.navigate([`/news/${this.newsItem.id}`]);
  }
}
