import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_API_URL } from '../constants/injection';
import { Adresse } from '../models/adresse';

@Injectable({
  providedIn: 'root'
})
export class AdresseService {

  constructor(private http: HttpClient, @Inject(BASE_API_URL) private baseUrl: string) {
  }
 
  getAll(): Observable<Adresse[]> {
    return this.http.get<Adresse[]>(`${this.baseUrl}/adresses`);
  }
}
