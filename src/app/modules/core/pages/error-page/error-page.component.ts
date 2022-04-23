import { Component } from '@angular/core';

@Component({
  selector: 'app-error-page',
  template: `<div class="container">
    <a class="button" routerLink="/">На главную</a>
    <p>Такой страницы не существует!</p>
  </div>`,
})
export class ErrorPageComponent {
  constructor() {}
}
