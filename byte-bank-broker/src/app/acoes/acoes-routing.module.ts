import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcoesComponent } from './acoes.component';

export const routes: Routes = [
  {
    path: '',
    component: AcoesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcoesRoutingModule {}
