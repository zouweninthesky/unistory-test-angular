import { Component } from '@angular/core';

import articles, { Article } from 'src/data/articles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentArticle: Article | undefined;

  articles = articles;

  chooseArticle(id: number) {
    this.currentArticle = this.articles.find((a) => a.id === id);
  }
}
