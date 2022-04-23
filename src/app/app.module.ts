import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ModalModule } from './modules/modal/modal.module';
import { AppRoutingModule } from './modules/routing/app-routing.module';
import { ArticleModule } from './modules/articles/article.module';
import { ModalService } from './modules/modal/services/modal.service';

import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule,
    ArticleModule,
    CoreModule,
  ],
  providers: [ModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
