import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalService } from 'src/app/services/modal-serice/modal.service';

import { Article } from 'src/data/articles';
import { ArticlesService } from '../../services/articles-service/articles.service';
import ModalIds from 'src/app/services/modal-serice/modals-id';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  article: Article | undefined;
  get deleteModalOpened(): boolean {
    return this.modalService.getModalId() === ModalIds.DELETE;
  }

  constructor(
    private articlesService: ArticlesService,
    private modalService: ModalService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const articleId = Number(this.route.snapshot.paramMap.get('articleId'));
    const articles = this.articlesService.getArticles();

    this.article = articles.find((a) => a.id === articleId);
  }
}
