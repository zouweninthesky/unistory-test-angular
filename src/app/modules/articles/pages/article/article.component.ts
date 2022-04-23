import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { ModalService } from 'src/app/modules/modal/services/modal.service';
import { ArticlesService } from 'src/app/modules/articles/services/articles.service';

import ModalIds from 'src/app/modules/modal/utils/modals-id';
import { Article } from 'src/data/articles';

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
    private route: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit() {
    const articleId = Number(this.route.snapshot.paramMap.get('articleId'));
    const articles = this.articlesService.getArticles();

    this.article = articles.find((a) => a.id === articleId);
    if (this.article) this.titleService.setTitle(this.article.title);
  }
}
