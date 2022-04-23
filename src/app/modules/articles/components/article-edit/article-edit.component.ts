import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Article } from 'src/data/articles';
import { Router } from '@angular/router';

import { ModalService } from 'src/app/modules/modal/services/modal.service';
import { ArticlesService } from '../../services/articles.service';

import ModalIds from 'src/app/modules/modal/utils/modals-id';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
})
export class ArticleEditComponent implements OnInit {
  @Input() article: Article | undefined;
  @Output() isModifiedEvent = new EventEmitter<boolean>();

  title: string = '';
  content: string = '';
  isModified: boolean = false;

  constructor(
    private articlesService: ArticlesService,
    private modalService: ModalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.title = this.article!.title;
    this.content = this.article!.content;
  }

  onChange() {
    if (
      this.title !== this.article!.title ||
      this.content !== this.article!.content
    ) {
      this.isModified = true;
      this.isModifiedEvent.emit(true);
    } else {
      this.isModified = false;
      this.isModifiedEvent.emit(false);
    }
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
    this.modalService.setModalId(ModalIds.DELETE);
  }
}
