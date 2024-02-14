import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BASE_API_URL } from '../constants/injection';
import { Observable } from 'rxjs';
import { Domaine } from '../models/domaine';

@Injectable({
  providedIn: 'root'
})
export class AddDomaineService {

  constructor(private http: HttpClient, @Inject(BASE_API_URL) private baseUrl: string) {
    
  }
 
  postAll(domaine: any): Observable<Domaine> {
    return this.http.post<Domaine>(`${this.baseUrl}/domaines`, domaine);
  }
  getAll(): Observable<Domaine[]> {
    return this.http.get<Domaine[]>(`${this.baseUrl}/domaines`);
  }
}
