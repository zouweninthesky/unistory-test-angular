import { Injectable } from '@angular/core';
import articles, { Article } from '../../../data/articles';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  articles: Article[] = [...articles];

  getArticles() {
    return this.articles;
  }

  deleteArticle(id: number) {
    this.articles = this.articles.filter((a) => a.id !== id);
  }

  // constructor() {}
}
