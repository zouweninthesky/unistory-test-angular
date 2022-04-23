import { Component, Output, EventEmitter } from '@angular/core';
import { ModalService } from 'src/app/services/modal-serice/modal.service';
import { ArticlesService } from '../../services/articles-service/articles.service';

import ModalIds from 'src/app/services/modal-serice/modals-id';

@Component({
  selector: 'app-article-create-modal',
  templateUrl: './article-create-modal.component.html',
  styleUrls: ['./article-create-modal.component.scss'],
})
export class ArticleCreateModalComponent {
  @Output() createCanceledEvent = new EventEmitter();
  title: string = '';
  content: string = '';

  constructor(
    private articlesService: ArticlesService,
    private modalService: ModalService
  ) {}

  onSave() {
    this.articlesService.createArticle(this.title, this.content);
    this.modalService.setModalId(ModalIds.NONE);
  }

  onCancel() {
    this.modalService.setModalId(ModalIds.NONE);
  }
}
