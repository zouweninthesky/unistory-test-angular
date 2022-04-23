import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleTileComponent } from './components/article-tile/article-tile.component';
import { BlogComponent } from './views/blog/blog.component';
import { ArticleComponent } from './views/article/article.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';
import { ArticleCreateModalComponent } from './components/article-create-modal/article-create-modal.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleTileComponent,
    BlogComponent,
    ArticleComponent,
    DeleteModalComponent,
    ArticleEditComponent,
    ArticleCreateModalComponent,
    ErrorPageComponent,
    ModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
