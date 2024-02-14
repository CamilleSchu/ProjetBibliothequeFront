import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { FormControl, ReactiveFormsModule, FormGroup, NgModel } from '@angular/forms';
import { AddAuteurService } from '../../services/add-auteur.service';
import { MatCard } from '@angular/material/card';
import { AuteursComponent } from '../auteurs/auteurs.component';
import { LivresComponent } from '../livres/livres.component';
import { AsyncPipe, NgFor } from '@angular/common';
import { Observable, pipe } from 'rxjs';
import { Livre } from '../../models/livre';
import { LivreService } from '../../services/livre.service';
import { PutAuteurService } from '../../services/put-auteur.service';
import { ActivatedRoute } from '@angular/router';
import { parseTemplate } from '@angular/compiler';
import { Auteur } from '../../models/auteur';

@Component({
  selector: 'app-put-auteur',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, MatDividerModule, MatButtonModule, ReactiveFormsModule, MatCard, AuteursComponent, LivresComponent, NgFor, AsyncPipe],
  templateUrl: './put-auteur.component.html',
  styleUrl: './put-auteur.component.css'
})
export class PutAuteurComponent {
  
  auteur!: Auteur;

  nom = new FormControl('');
  prenom = new FormControl('');
  email = new FormControl('');
  telephone = new FormControl('');
  grade = new FormControl('');
  livres = new FormControl('');

  livres$: Observable<Livre[]> = this.livreservice.getAll();

  EditAuteur() {
    const id: number = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);
    const auteur = {"id": `${id}`, "nom": `${this.nom.value}`, "prenom": `${this.prenom.value}`, "email": `${this.email.value}`, "telephone": `${this.telephone.value}`, "grade": `${this.grade.value}`};
    this.putAuteurService.PutAuteurById(id, auteur).subscribe({
      next:(res)=> {localStorage.setItem("logUser", JSON.stringify(res))},
      error:(err) => {console.log(err)}
    })
    
  }

  constructor(private activatedRoute: ActivatedRoute, private putAuteurService: PutAuteurService, private livreservice: LivreService) {
    
  }
}
