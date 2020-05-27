import {TestBed} from '@angular/core/testing';

import {DatabaseService} from './database.service';
import {DatabaseTablesEnum} from '../enums/databaseTables.enum';
import {Article} from '../interfaces/article.interface';

describe('DatabaseService', () => {
  let service: DatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save entity', () => {
    spyOn(DatabaseService, 'generateId').and.returnValue('123');
    const article: Omit<Article, 'id'> = {
      heading: 'heading',
      shortDescription: 'shortDescription',
      fullDescription: 'fullDescription',
      date: new Date('21-08-2020'),
      author: 'author',
      source: 'author',
      imageUrl: 'author',
    };
    const savedEntity: Article = service.saveEntity(DatabaseTablesEnum.Articles, article);
    expect(savedEntity.id).toBe('123');
    expect(savedEntity.shortDescription).toBe('shortDescription');
  });

  it('should return item by id', () => {
    spyOn(JSON, 'parse').and.returnValue([{
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
    }]);
    const entity: Article = service.getById(DatabaseTablesEnum.Articles, '123');
    expect(entity.heading).toBe('heading123');
    expect(entity.id).toBe('123');
    expect(entity.fullDescription).toBe('fullDescription123');
  });

  it('should return all table items', () => {
    spyOn(JSON, 'parse').and.returnValue([{
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
    }]);
    const articles: Article[] = service.getAll(DatabaseTablesEnum.Articles);
    expect(articles[0].id).toBe('2222');
    expect(articles[1].id).toBe('123');
  });
});
