import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from '../articles/pages/blog/blog.component';
import { ArticleComponent } from '../articles/pages/article/article.component';
import { ErrorPageComponent } from '../core/pages/error-page/error-page.component';

const routes: Routes = [
  { path: 'article/:articleId', component: ArticleComponent },
  {
    path: '',
    component: BlogComponent,
  },
  {
    path: '**',
    component: ErrorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
