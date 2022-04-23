import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/modules/modal/services/modal.service';
import { ArticlesService } from '../../services/articles.service';

import ModalIds from 'src/app/modules/modal/utils/modals-id';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
})
export class DeleteModalComponent {
  @Input() id: number = 0;
  @Output() deleteCanceledEvent = new EventEmitter();

  constructor(
    private articlesService: ArticlesService,
    private modalService: ModalService,
    private router: Router
  ) {}

  onDelete() {
    this.articlesService.deleteArticle(this.id);
    this.modalService.setModalId(ModalIds.NONE);
    this.router.navigate(['/']);
  }

  onCancel() {
    this.modalService.setModalId(ModalIds.NONE);
  }
}
