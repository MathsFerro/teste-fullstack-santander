import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Collaborator, CollaboratorData, CollaboratorsService, PageableData } from '../collaborators.service';

@Component({
  selector: 'app-collaborators-list',
  templateUrl: './collaborators-list.component.html',
  styleUrls: ['./collaborators-list.component.scss']
})
export class CollaboratorsListComponent implements OnInit {

  collaboratorData: CollaboratorData;
  pageable: PageableData;
  filterName: string = "";
  selectedPageSize: number = 2;

  constructor(
    private collaboratorsService: CollaboratorsService,
    private toastr: ToastrService,
  ) { 
    this.pageable = {
      pageSize: 2,
      pageNumber: 0
    };
  }

  ngOnInit(): void { 
    this.findAll();
  }

  findAll() { 
    this.pageable.pageSize = this.selectedPageSize;

    this.collaboratorsService.findAll(this.pageable).subscribe(resp => {
      this.collaboratorData = resp;
    }, error => {
      this.toastr.error("Falha ao buscar colaboradores", "Erro!");
      console.log(error);
    });
  }

  findCollaboratorByName() {
    if(!this.filterName.trim())
      this.findAll();

    this.collaboratorsService.findCollaboratorByName(this.pageable, this.filterName).subscribe(resp => {
      this.collaboratorData = resp;
    }, error => {
      this.toastr.error("Falha ao buscar colaboradores com esse nome", "Erro!");
      console.log(error);
    });
  }

  previousPage() {
    if(this.pageable.pageNumber>0) {
      this.pageable.pageNumber--;
      this.findAll();
    }
  }

  nextPage() {
    if(this.pageable.pageNumber<this.collaboratorData.totalPages-1) {
      this.pageable.pageNumber++;
      this.findAll();
    }
  }
}
