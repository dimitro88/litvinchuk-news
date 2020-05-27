import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CreateNewsDialogComponent} from '../../../../shared/components/create-news-dialog/create-news-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {DatabaseService} from '../../../../shared/services/database.service';
import {ArticlesService} from '../../../../shared/services/articles.service';

interface Source {
  name: string;
  id: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public sources: string[];
  public selectedSource: string;

  constructor(
    public dialog: MatDialog,
    private articlesService: ArticlesService
  ) { }

  ngOnInit(): void {
    this.articlesService.getSources().subscribe(sources => {
      this.sources = sources;
    });
    this.articlesService.getCurrentSource().subscribe(source => {
      this.selectedSource = source;
    });
  }

  onSelectChange(newSource) {
    if (newSource !== 'All Sources') {
      this.articlesService.setCurrentSource(newSource);
    } else {
      this.selectedSource = newSource;
      this.articlesService.setAllArticles();
    }
  }

  openCreateArticleDialog(): void {
    this.dialog.open(CreateNewsDialogComponent, {
      width: '60vw',
      height: '70vh',
      panelClass: 'add-news-dialog-container'
    });
  }

  filterArticles(filterValue: string): void {
    this.articlesService.filterCurrentArticles(filterValue);
  }
}
