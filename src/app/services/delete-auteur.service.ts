import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_API_URL } from '../constants/injection';
import { Auteur } from '../models/auteur';

@Injectable({
  providedIn: 'root'
})
export class DeleteAuteurService {

  constructor(private http: HttpClient, @Inject(BASE_API_URL) private baseUrl: string) {
    
  }

  DeleteById(id: number): Observable<Auteur> {
    return this.http.delete<Auteur>(`${this.baseUrl}/auteurs/${id}`);
  }
}
