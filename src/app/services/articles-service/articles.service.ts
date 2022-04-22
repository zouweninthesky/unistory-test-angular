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

  changeArticle(id: number, newTitle: string, newContent: string) {
    const changedArticleIndex = this.articles.findIndex((a) => a.id === id);
    if (changedArticleIndex !== -1) {
      this.articles[changedArticleIndex].title = newTitle;
      this.articles[changedArticleIndex].content = newContent;
      //   const changedArticle = { ...this.articles[changedArticleIndex] };
      //   changedArticle.title = newTitle;
      //   changedArticle.content = newContent;
      //   this.articles = [
      //     ...this.articles.slice(0, changedArticleIndex),
      //     changedArticle,
      //     ...this.articles.slice(changedArticleIndex + 1),
      //   ];
    }
  }

  createArticle(title: string, content: string) {
    const newArticle: Article = {
      id: Date.now(),
      title,
      content,
    };

    this.articles.push(newArticle);
  }
}
