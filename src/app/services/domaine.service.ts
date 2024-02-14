import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_API_URL } from '../constants/injection';
import { Domaine } from '../models/domaine';

@Injectable({
  providedIn: 'root'
})
export class DomaineService {

  constructor(private http: HttpClient, @Inject(BASE_API_URL) private baseUrl: string) {
    
  }
 
  getAll(): Observable<Domaine[]> {
    return this.http.get<Domaine[]>(`${this.baseUrl}/domaines`);
  }
}
