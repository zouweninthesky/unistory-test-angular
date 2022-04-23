import { Component, Output, EventEmitter } from '@angular/core';
import { ModalService } from 'src/app/modules/modal/services/modal.service';
import { ArticlesService } from '../../services/articles.service';

import ModalIds from 'src/app/modules/modal/utils/modals-id';

@Component({
  selector: 'app-article-create-modal',
  templateUrl: './article-create-modal.component.html',
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
