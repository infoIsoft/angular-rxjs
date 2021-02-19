import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromisesComponent } from './promises/promises.component';

const routes: Routes = [
  {path: '', redirectTo: 'app', pathMatch: 'full'},
  {path: 'promises', component: PromisesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
