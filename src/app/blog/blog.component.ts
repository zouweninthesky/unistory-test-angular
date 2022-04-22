import { Component } from '@angular/core';
import { Article } from '../app.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: [],
})
export class BlogComponent {
  currentArticle: Article | undefined;

  articles: Article[] = [
    { id: 222, title: 'Breaking news', content: 'waow' },
    {
      id: 224,
      title: 'Second article',
      content:
        'enormous content enormous content enormous content enormous contentenormous content enormous content enormous content',
    },
    { id: 226, title: 'Third article', content: 'test' },
  ];

  chooseArticle(id: number) {
    this.currentArticle = this.articles.find((a) => a.id === id);
  }
}
