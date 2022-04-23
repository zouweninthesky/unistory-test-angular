import { Component, Output, EventEmitter } from '@angular/core';
import { ArticlesService } from '../../services/articles-service/articles.service';

@Component({
  selector: 'app-article-create-modal',
  templateUrl: './article-create-modal.component.html',
  styleUrls: ['./article-create-modal.component.scss'],
})
export class ArticleCreateModalComponent {
  @Output() createCanceledEvent = new EventEmitter();
  title: string = '';
  content: string = '';

  constructor(private articlesService: ArticlesService) {}

  onSave() {
    this.articlesService.createArticle(this.title, this.content);
    this.createCanceledEvent.emit();
  }

  onCancel() {
    this.createCanceledEvent.emit();
  }
}
