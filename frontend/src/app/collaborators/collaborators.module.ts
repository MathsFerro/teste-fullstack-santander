import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollaboratorsRoutingModule } from './collaborators-routing.module';
import { CollaboratorsFormComponent } from './collaborators-form/collaborators-form.component';
import { CollaboratorsListComponent } from './collaborators-list/collaborators-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CollaboratorsFormComponent,
    CollaboratorsListComponent
  ],
  imports: [
    CommonModule,
    CollaboratorsRoutingModule,
    FormsModule,
  ],
  exports: [
    CollaboratorsFormComponent
  ]
})
export class CollaboratorsModule { }
