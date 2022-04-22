import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../data/articles';

@Component({
  selector: 'app-article-tile',
  templateUrl: './article-tile.component.html',
  styleUrls: ['./article-tile.component.scss'],
})
export class ArticleTileComponent {
  @Input() article: Article = { id: 0, title: '', content: '' };
  // @Output() articleChosenEvent = new EventEmitter<number>();

  // chooseArticle(id: number) {
  //   this.articleChosenEvent.emit(id);
  // }
}
