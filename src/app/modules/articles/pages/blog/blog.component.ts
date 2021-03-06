import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ModalService } from '../../../modal/services/modal.service';
import { ArticlesService } from '../../services/articles.service';

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
    private modalService: ModalService,
    private titleService: Title
  ) {}

  onCreate() {
    this.modalService.setModalId(ModalIds.CREATE);
  }

  ngOnInit() {
    this.titleService.setTitle('Блог');
  }
}
