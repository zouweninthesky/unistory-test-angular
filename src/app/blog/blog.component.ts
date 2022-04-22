import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../data/articles';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  articles = this.articlesService.getItems();
  constructor(
    // private route: ActivatedRoute,
    private articlesService: ArticlesService
  ) {}

  ngOnInit(): void {
    // this.route.data.subscribe((data) => {
    //   this.articles = data['articles'];
    // });
  }
}
