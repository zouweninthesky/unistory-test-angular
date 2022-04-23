import { Component } from '@angular/core';

import articles, { Article } from 'src/data/articles';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
