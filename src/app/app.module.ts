import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleTileComponent } from './article-tile/article-tile.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [AppComponent, ArticleTileComponent, BlogComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
