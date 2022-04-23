import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ErrorPageComponent } from './pages/error-page/error-page.component';

@NgModule({
  declarations: [ErrorPageComponent],
  imports: [RouterModule],
  exports: [ErrorPageComponent],
  providers: [],
})
export class CoreModule {}
