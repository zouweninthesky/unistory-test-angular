import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ArticlesService } from './services/articles-service/articles.service';
import { ArticleCreateModalComponent } from './components/article-create-modal/article-create-modal.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';
import { ArticleTileComponent } from './components/article-tile/article-tile.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { ModalModule } from '../modal/modal.module';

@NgModule({
  imports: [ModalModule, BrowserModule, FormsModule, RouterModule],
  declarations: [
    ArticleCreateModalComponent,
    ArticleEditComponent,
    ArticleTileComponent,
    DeleteModalComponent,
  ],
  exports: [
    ArticleCreateModalComponent,
    ArticleEditComponent,
    ArticleTileComponent,
    DeleteModalComponent,
  ],
  providers: [ArticlesService],
})
export class ArticleModule {}
