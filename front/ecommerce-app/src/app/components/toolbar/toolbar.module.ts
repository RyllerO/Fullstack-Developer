import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material';
import {ToolbarComponent} from './toolbar.component';

@NgModule({
  imports: [
    MatToolbarModule,
  ],
  exports: [ToolbarComponent],
  declarations: [ToolbarComponent],
  providers: []
})
export class ToolbarModule {

}
