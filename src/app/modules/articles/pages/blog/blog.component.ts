import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../modal/services/modal.service';
import { ArticlesService } from '../../services/articles-service/articles.service';
import ModalIds from '../../../modal/utils/modals-id';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  articles = this.articlesService.getArticles();
  get createModalOpened(): boolean {
    return this.modalService.getModalId() === ModalIds.CREATE;
  }

  constructor(
    private articlesService: ArticlesService,
    private modalService: ModalService
  ) {}

  onCreate() {
    this.modalService.setModalId(ModalIds.CREATE);
  }

  ngOnInit(): void {}
}
