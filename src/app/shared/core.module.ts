import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeadcrumbComponent } from '../components/beadcrumb/beadcrumb.component';
import { ButtonComponent } from '../components/button/button.component';

@NgModule({
  declarations: [
    BeadcrumbComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BeadcrumbComponent,
    ButtonComponent
  ]
})
export class CoreModule { }
