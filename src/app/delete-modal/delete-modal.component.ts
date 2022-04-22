import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from '../services/articles-service/articles.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss'],
})
export class DeleteModalComponent {
  @Input() id: number = 0;
  @Output() deleteCanceledEvent = new EventEmitter();

  constructor(
    private articlesService: ArticlesService,
    private router: Router
  ) {}

  onDelete() {
    this.articlesService.deleteArticle(this.id);
    this.router.navigate(['/']);
  }

  onCancel() {
    this.deleteCanceledEvent.emit();
  }
}
