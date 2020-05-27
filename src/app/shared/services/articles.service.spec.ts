import { TestBed } from '@angular/core/testing';

import { ArticlesService } from './articles.service';
import {BehaviorSubject} from 'rxjs';
import {Article} from '../interfaces/article.interface';

describe('ArticlesService', () => {
  let service: ArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return sources BehaviourSubject', () => {
    const sources$ = service.getSources();
    expect(sources$ instanceof BehaviorSubject).toBe(true);
  });

  it('should return current sources BehaviourSubject', () => {
    const currentSources$ = service.getCurrentSource();
    expect(currentSources$ instanceof BehaviorSubject).toBe(true);
  });

  it('should set sources', () => {
    service.setSources(['1', '2']);
    const subscribe = service.getSources().subscribe(sources => {
      expect(sources[0]).toBe('1');
      expect(sources[1]).toBe('2');
    });
    subscribe.unsubscribe();
  });

  it('should set current source', () => {
    service.setCurrentSource('1');
    const subscribe = service.getCurrentSource().subscribe(source => {
      expect(source).toBe('1');
    });
    subscribe.unsubscribe();
  });

  it('should add source to the list', () => {
    service.setSources(['1', '3']);
    service.addSource('newSource');
    const subscribe = service.getSources().subscribe(sources => {
      expect(sources[0]).toBe('1');
      expect(sources[1]).toBe('3');
      expect(sources[2]).toBe('newSource');
    });
    subscribe.unsubscribe();
  });

  it('should add article to the list', () => {
    const articles: Article[] = [
      {
        id: '2222',
        heading: 'heading',
        shortDescription: 'shortDescription',
        fullDescription: 'fullDescription',
        date: new Date('21-08-2020'),
        author: 'author',
        source: 'author',
        imageUrl: 'author',
      }, {
        id: '123',
        heading: 'heading123',
        shortDescription: 'shortDescription123',
        fullDescription: 'fullDescription123',
        date: new Date('21-08-2020'),
        author: 'author',
        source: 'author',
        imageUrl: 'author',
      }
    ];
    const newArticle: Article = {
      id: 'new',
      heading: 'headingnew',
      shortDescription: 'shortDescriptionnew',
      fullDescription: 'fullDescriptionnew',
      date: new Date('21-08-2020'),
      author: 'author',
      source: 'author',
      imageUrl: 'author',
    };
    spyOn(service.databaseService, 'getAll').and.returnValue(articles);
    service.setAllArticles();
    service.addArticle(newArticle);
    service.getCurrentArticles().subscribe((art: Article[]) => {
      expect(art[0].id).toBe('2222');
      expect(art[1].id).toBe('123');
      expect(art[2].id).toBe('new');
    });
  });

  it('should filter current articles', () => {
    const articles: Article[] = [
      {
        id: 'filter1',
        heading: 'opfilterop',
        shortDescription: 'shortDescription',
        fullDescription: 'fullDescription',
        date: new Date('21-08-2020'),
        author: 'author',
        source: 'author',
        imageUrl: 'author',
      }, {
        id: '123',
        heading: 'heading123',
        shortDescription: 'shortDescription123',
        fullDescription: 'fullDescription123',
        date: new Date('21-08-2020'),
        author: 'author',
        source: 'author',
        imageUrl: 'author',
      }, {
        id: 'filter2',
        heading: 'heading123',
        shortDescription: 'filter',
        fullDescription: 'fullDescription123',
        date: new Date('21-08-2020'),
        author: 'author',
        source: 'author',
        imageUrl: 'author',
      }, {
        id: 'nofilt',
        heading: 'heading123',
        shortDescription: 'no',
        fullDescription: 'fullDescription123',
        date: new Date('21-08-2020'),
        author: 'author',
        source: 'author',
        imageUrl: 'author',
      }
    ];
    spyOn(service.databaseService, 'getAll').and.returnValue(articles);
    service.setAllArticles();
    service.filterCurrentArticles('filter');
    service.getFilteredArticles().subscribe(filteredArticles => {
      expect(filteredArticles[0].id).toBe('filter1');
      expect(filteredArticles[0].heading).toBe('opfilterop');

      expect(filteredArticles[1].id).toBe('filter2');
      expect(filteredArticles[1].shortDescription).toBe('filter');
    });
  });
});
