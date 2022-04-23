import { Component } from '@angular/core';

import articles, { Article } from 'src/data/articles';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {}
