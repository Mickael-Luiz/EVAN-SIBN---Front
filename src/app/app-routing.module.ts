import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'lead', loadChildren: () => import('./modules/lead/lead.module').then(m => m.LeadModule)
  },
  {
    path: 'pipeline', loadChildren: () => import('./modules/lead/lead.module').then(m => m.LeadModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
