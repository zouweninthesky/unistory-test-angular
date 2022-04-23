import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from '../../views/blog/blog.component';
import { ArticleComponent } from '../../views/article/article.component';
import { ErrorPageComponent } from '../../views/error-page/error-page.component';

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
