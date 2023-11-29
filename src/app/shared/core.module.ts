import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeadcrumbComponent } from '../components/beadcrumb/beadcrumb.component';
import { ButtonComponent } from '../components/button/button.component';
import { TableComponent } from '../components/table/table.component';

@NgModule({
  declarations: [
    BeadcrumbComponent,
    ButtonComponent,
    TableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BeadcrumbComponent,
    ButtonComponent,
    TableComponent
  ]
})
export class CoreModule { }
