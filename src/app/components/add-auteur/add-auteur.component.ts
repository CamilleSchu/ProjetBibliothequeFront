import { Component, Pipe } from '@angular/core';
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

@Component({
  selector: 'app-add-auteur',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, MatDividerModule, MatButtonModule, ReactiveFormsModule, MatCard, AuteursComponent, LivresComponent, NgFor, AsyncPipe],
  templateUrl: './add-auteur.component.html',
  styleUrl: './add-auteur.component.css'
})
export class AddAuteurComponent {
  nom = new FormControl('');
  prenom = new FormControl('');
  email = new FormControl('');
  telephone = new FormControl('');
  grade = new FormControl('');
  livres = new FormControl('');

  livres$: Observable<Livre[]> = this.livreservice.getAll();

  createAuteur() {
    const auteur = {"nom": `${this.nom.value}`, "prenom": `${this.prenom.value}`, "email": `${this.email.value}`, "telephone": `${this.telephone.value}`, "grade": `${this.grade.value}`};
    this.addAuteurService.postAll(auteur).subscribe({
      next:(res)=> {localStorage.setItem("logUser", JSON.stringify(res))},
      error:(err) => {console.log(err)}
    })
    
  }

  constructor(private addAuteurService: AddAuteurService, private livreservice: LivreService) {
    
  }

}
