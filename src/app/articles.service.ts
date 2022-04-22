import { Injectable } from '@angular/core';
import articles, { Article } from '../data/articles';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  articles: Article[] = [...articles];

  getItems() {
    return this.articles;
  }

  // constructor() {}
}
