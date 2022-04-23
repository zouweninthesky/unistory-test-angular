import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../modules/modal/services/modal.service';
import { ArticlesService } from '../../modules/articles/services/articles-service/articles.service';
import ModalIds from '../../modules/modal/utils/modals-id';

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
