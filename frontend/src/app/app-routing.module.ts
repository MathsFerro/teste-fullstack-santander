import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollaboratorsListComponent } from './collaborators/collaborators-list/collaborators-list.component';

const routes: Routes = [
  { 
    path: "",
    component: CollaboratorsListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
