import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Collaborator, CollaboratorsService } from '../collaborators.service';

@Component({
  selector: 'app-collaborators-form',
  templateUrl: './collaborators-form.component.html',
  styleUrls: ['./collaborators-form.component.scss']
})
export class CollaboratorsFormComponent implements OnInit {

  collaborator: Collaborator;

  constructor(
    private collaboratorsService: CollaboratorsService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.collaborator = new Collaborator();
  }

  ngOnInit(): void { }

  submitForm() {
    if(this.collaborator.birthDate) {
      this.collaborator.birthDate = new Date(this.collaborator.birthDate).toLocaleDateString();
    }
    
    this.collaboratorsService.add(this.collaborator).subscribe( resp => {
      this.toastr.success("Colaborador adicionado com sucesso!", "Sucesso!");
      this.goBack();
    }, error => {
      this.toastr.error("Verifique se todos os campos estão preenchidos", "Erro!");
    });
  }

  goBack() {
    this.router.navigateByUrl("/")
  }

}
