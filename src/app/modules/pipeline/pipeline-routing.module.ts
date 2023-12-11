import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipelineComponent } from './pipeline/pipeline.component';
import { ProgressComponent } from './progress/progress.component';

const routes: Routes = [
  {path: '', component: PipelineComponent},
  {path: 'progress', component: ProgressComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipelineRoutingModule { }
