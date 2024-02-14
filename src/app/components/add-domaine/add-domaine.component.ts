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
import { Domaine } from '../../models/domaine';
import { AddDomaineService } from '../../services/add-domaine.service';

@Component({
  selector: 'app-add-domaine',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, MatDividerModule, MatButtonModule, ReactiveFormsModule, MatCard, AuteursComponent, LivresComponent, NgFor, AsyncPipe],
  templateUrl: './add-domaine.component.html',
  styleUrl: './add-domaine.component.css'
})
export class AddDomaineComponent {
  nom = new FormControl('');
  description = new FormControl('');
  livres = new FormControl('');

  domaines$: Observable<Domaine[]> = this.addDomaineService.getAll();

  createDomaine() {
    const auteur = {"nom": `${this.nom.value}`, "description": `${this.description.value}`};
    this.addDomaineService.postAll(auteur).subscribe({
      next:(res)=> {localStorage.setItem("logUser", JSON.stringify(res))},
      error:(err) => {console.log(err)}
    })
    
  }

  constructor(private addDomaineService: AddDomaineService, private livreservice: LivreService) {
    
  }
}
