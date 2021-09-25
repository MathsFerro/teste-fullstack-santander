import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CollaboratorsService {

  devUrl="http://localhost:8080/api/collaborator";

  constructor(
    private http: HttpClient
  ) { }

  add(collaborator: Collaborator): Observable<Collaborator> {
    return this.http.post<Collaborator>(this.devUrl, collaborator);
  }

  findAll(pageable: PageableData): Observable<CollaboratorData> {
    const params = new HttpParams().appendAll({
      'size': pageable.pageSize,
      'page': pageable.pageNumber
    });

    return this.http.get<CollaboratorData>(this.devUrl+"/all", { params });
  }

  findCollaboratorByName(pageable: PageableData, name: string): Observable<CollaboratorData> {
    const params = new HttpParams().appendAll({
      'size': pageable.pageSize,
      'page': pageable.pageNumber,
      'name': name
    });

    return this.http.get<CollaboratorData>(this.devUrl+"/by-name", { params });
  }

  edit(collaborator: Collaborator): Observable<Collaborator> {
    const id = collaborator.id;
    return this.http.put<Collaborator>(this.devUrl+`/${id}`, {
      id,
      name: collaborator.name,
      lastName: collaborator.lastName,
      role: collaborator.role,
      birthDate: moment(collaborator.birthDate, "YYYY-MM-DD", true).format("DD/MM/YYYY"),
      address: collaborator.address
    } as Collaborator);
  }

  findById(id: number): Observable<Collaborator> {
    return this.http.get<Collaborator>(this.devUrl+`/${id}`);
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete<any>(this.devUrl+`/${id}`);
  }
}

export interface Collaborator {
  id: number;
  name: string;
  lastName: string;
  birthDate: string;
  role: string;
  address: Address;
}

export interface Address {
  number: number;
  cep: number;
  logradouro: string;
  district: string;
  city: string;
  state: string;
}

export interface CollaboratorData {
  content: Collaborator[];
  numberOfElements: number;
  pageable: PageableData;
  totalPages: number;
}

export interface PageableData {
  pageNumber: number;
  pageSize: number;
}