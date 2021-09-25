import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollaboratorsService {

  devUrl="http://localhost:8080/api";

  constructor(
    private http: HttpClient
  ) { }

  add(collaborator: Collaborator): Observable<Collaborator> {
    return this.http.post<Collaborator>(this.devUrl+"/collaborator", collaborator);
  }

  findAll(pageable: PageableData): Observable<CollaboratorData> {
    const params = new HttpParams().appendAll({
      'size': pageable.pageSize,
      'page': pageable.pageNumber
    });

    return this.http.get<CollaboratorData>(this.devUrl+"/collaborators", { params });
  }

  findCollaboratorByName(pageable: PageableData, name: string): Observable<CollaboratorData> {
    const params = new HttpParams().appendAll({
      'size': pageable.pageSize,
      'page': pageable.pageNumber,
      'name': name
    });
    return this.http.get<CollaboratorData>(this.devUrl+"/collaborators-by-name", { params });
  }
}

export class Collaborator {
  id: number;
  name: string;
  lastName: string;
  birthDate: string;
  role: string;
  address: Address = new Address();
}

export class Address {
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