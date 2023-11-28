import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadRoutingModule } from './lead-routing.module';
import { CoreModule } from 'src/app/shared/core.module';
import { LeadComponent } from './lead/lead.component';


@NgModule({
  declarations: [
    LeadComponent
  ],
  imports: [
    CommonModule,
    LeadRoutingModule,
    CoreModule
  ]
})
export class LeadModule { }
