import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from './modules/modal/modal.module';

import { AppRoutingModule } from './modules/routing/app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './modules/articles/pages/blog/blog.component';
import { ArticleComponent } from './modules/articles/pages/article/article.component';
import { ArticleModule } from './modules/articles/article.module';
import { ModalService } from './modules/modal/services/modal.service';

@NgModule({
  declarations: [AppComponent, BlogComponent, ArticleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule,
    ArticleModule,
  ],
  providers: [ModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
