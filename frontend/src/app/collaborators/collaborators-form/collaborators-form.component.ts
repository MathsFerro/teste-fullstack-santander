import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { Collaborator, CollaboratorsService } from '../collaborators.service';

@Component({
  selector: 'app-collaborators-form',
  templateUrl: './collaborators-form.component.html',
  styleUrls: ['./collaborators-form.component.scss']
})
export class CollaboratorsFormComponent implements OnInit {

  collaborator: Collaborator = {
    address: {}
  } as Collaborator;

  editMode: boolean = false;
  inputBirthDate: string;
  id: string;

  constructor(
    private collaboratorsService: CollaboratorsService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void { 
    this.activatedRoute.paramMap.subscribe(resp => {
      if(resp.get("id")!=null) {
        this.editMode = !this.editMode;
        this.id = resp.get("id") || "";

        if(this.id=="")
          this.goBack();

        this.collaboratorsService.findById(Number(this.id)).subscribe(resp => {
          this.inputBirthDate = moment(resp.birthDate, "DD/MM/YYYY", true).format("YYYY-MM-DD");
          this.collaborator = resp;
          this.collaborator.birthDate = this.inputBirthDate;
        }, error => {
          this.toastr.error("Erro ao buscar colaborador", "Erro!");
          console.log(error);
          this.goBack();
        })
      }
    });
  }

  submitForm() {
    if(this.editMode) {      
      this.collaborator.birthDate = this.inputBirthDate;
      this.collaboratorsService.edit(this.collaborator).subscribe(resp => {
        this.toastr.success("Colaborador editado!", "Sucesso!");
        this.goBack();
      }, error => {
        this.toastr.error("Verifique se todos os campos estão preenchidos", "Erro!");    
        console.log(error);
      });
      return;
    }

    this.collaborator.birthDate = moment(this.inputBirthDate, "YYYY-MM-DD", true).format("DD/MM/YYYY");
    this.collaboratorsService.add(this.collaborator).subscribe(resp => {
      this.toastr.success("Colaborador adicionado com sucesso!", "Sucesso!");
      this.goBack();
    }, error => {
      this.collaborator.birthDate = moment(this.collaborator.birthDate, "DD/MM/YYYY").format("YYYY-MM-DD");
      this.toastr.error("Verifique se todos os campos estão preenchidos", "Erro!");
      console.log(error);
    });  
  }

  goBack = () => this.router.navigateByUrl("/")

}
