import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../data/articles';

@Component({
  selector: 'app-article-tile',
  templateUrl: './article-tile.component.html',
  styleUrls: ['./article-tile.component.scss'],
})
export class ArticleTileComponent {
  @Input() article: Article = { id: 0, title: '', content: '' };
}
