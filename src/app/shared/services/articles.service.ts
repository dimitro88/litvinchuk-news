import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Article} from '../interfaces/article.interface';
import {DatabaseService} from './database.service';
import {DatabaseTablesEnum} from '../enums/databaseTables.enum';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private readonly sources$: BehaviorSubject<string[]> = new BehaviorSubject([]);
  private readonly currentArticles$: BehaviorSubject<Article[]> = new BehaviorSubject([]);
  private readonly filteredArticles$: BehaviorSubject<Article[]> = new BehaviorSubject(null);
  private readonly currentSource$: BehaviorSubject<string> = new BehaviorSubject(null);
  private filterValue: string;

  public getSources(): Observable<string[]> {
    return this.sources$;
  }

  public setSources(sources: string[]): void {
    this.sources$.next(sources);
  }

  public getCurrentSource(): Observable<string> {
    return this.currentSource$;
  }

  public setCurrentSource(source: string): void {
    this.currentSource$.next(source);
    const articles: Article[] = this.databaseService.getAll(DatabaseTablesEnum.Articles);
    this.filterArticles(articles);
  }

  public getCurrentArticles(): Observable<Article[]> {
    return this.currentArticles$;
  }

  public getFilteredArticles(): Observable<Article[]> {
    return this.filteredArticles$;
  }

  constructor(public databaseService: DatabaseService) {
    const articles: Article[] = this.databaseService.getAll(DatabaseTablesEnum.Articles);
    this.setInitialSources(articles);
    this.setInitialArticles(articles);
  }

  public addSource(source: string): void {
    const sources = this.sources$.value;
    if (!sources.includes(source)) {
      this.setSources([...sources, source]);
    }
  }

  public addArticle(article: Article): void {
    const articles = this.currentArticles$.value;
    this.currentArticles$.next(articles?.length ? [...articles, article] : [article]);
    this.filterCurrentArticles(this.filterValue);
  }

  public setAllArticles(): void {
    const articles: Article[] = this.databaseService.getAll(DatabaseTablesEnum.Articles);
    this.currentArticles$.next(articles);
    this.filterCurrentArticles(this.filterValue);
  }

  public filterCurrentArticles(filterValue: string): void {
    this.filterValue = filterValue;
    const currentArticles = this.currentArticles$.value;
    if (filterValue && currentArticles?.length) {
      filterValue = filterValue.toLocaleLowerCase();
      this.filteredArticles$.next(currentArticles.filter((article: Article) =>
        article.heading.toLocaleLowerCase().includes(filterValue) ||
        article.author.toLocaleLowerCase().includes(filterValue) ||
        article.shortDescription.toLocaleLowerCase().includes(filterValue) ||
        article.fullDescription.toLocaleLowerCase().includes(filterValue)
      ));
    } else {
      this.filteredArticles$.next(currentArticles);
    }
  }

  private setInitialSources(articles: Article[]): void {
    if (articles?.length) {
      const sources = articles.reduce((accum: string[], item: Article) => {
        if (!accum.includes(item.source)) {
          accum.push(item.source);
        }
        return accum;
      }, []);
      this.setSources(sources);
      this.setCurrentSource(sources[0]);
    } else {
      this.setSources([]);
      this.setCurrentSource(null);
    }
  }

  private setInitialArticles(articles: Article[]): void {
    const currentSource = this.currentSource$.value;
    if (currentSource) {
      this.filterArticles(articles);
    } else {
      this.currentArticles$.next([]);
    }
  }

  private filterArticles(articles: Article[]): void {
    const currentSource = this.currentSource$.value;
    console.log(articles, this.currentSource$.value);
    if (articles) {
      const filteredArticles = articles.filter((article: Article) => article.source === currentSource);
      this.currentArticles$.next(filteredArticles);
    } else {
      this.currentArticles$.next([]);
    }
    this.filterCurrentArticles(this.filterValue);
  }
}
