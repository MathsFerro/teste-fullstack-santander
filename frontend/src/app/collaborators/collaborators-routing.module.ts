import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollaboratorsFormComponent } from './collaborators-form/collaborators-form.component';

const routes: Routes = [
  {
    path: "collaborator",
    component: CollaboratorsFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollaboratorsRoutingModule { }
