import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoversComponent } from './sections/rovers/rovers.component';

const routes: Routes = [
{
    path: 'inicio',
      component: RoversComponent
    },
    {
      path: "**",
      redirectTo: 'inicio'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RoversRoutingModule { }