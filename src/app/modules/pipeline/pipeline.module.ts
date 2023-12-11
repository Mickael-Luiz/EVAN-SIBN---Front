import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipelineRoutingModule } from './pipeline-routing.module';
import { PipelineComponent } from './pipeline/pipeline.component';
import { CoreModule } from 'src/app/shared/core.module';
import { ProgressComponent } from './progress/progress.component';


@NgModule({
  declarations: [
    PipelineComponent,
    ProgressComponent
  ],
  imports: [
    CommonModule,
    PipelineRoutingModule,
    CoreModule
  ]
})
export class PipelineModule { }
