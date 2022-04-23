import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/data/articles';
import { Router } from '@angular/router';

import { ArticlesService } from '../../services/articles-service/articles.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss'],
})
export class ArticleEditComponent implements OnInit {
  @Input() article: Article | undefined;
  title: string = '';
  content: string = '';
  deleteModalOpened: boolean = false;

  constructor(
    private articlesService: ArticlesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.title = this.article!.title;
    this.content = this.article!.content;
  }

  onSave() {
    this.articlesService.changeArticle(
      this.article!.id,
      this.title,
      this.content
    );

    this.router.navigate(['/']);
  }

  onDelete() {
    this.deleteModalOpened = true;
  }

  onDeleteCancel() {
    this.deleteModalOpened = false;
  }
}