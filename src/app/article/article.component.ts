import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Article } from 'src/data/articles';
import { ArticlesService } from '../services/articles-service/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  article: Article | undefined;
  deleteAttempted: boolean = false;

  constructor(
    private articlesService: ArticlesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const articleId = Number(this.route.snapshot.paramMap.get('articleId'));
    const articles = this.articlesService.getArticles();

    this.article = articles.find((a) => a.id === articleId);
  }

  onDelete() {
    this.deleteAttempted = true;
  }

  onDeleteCancel() {
    this.deleteAttempted = false;
  }
}
