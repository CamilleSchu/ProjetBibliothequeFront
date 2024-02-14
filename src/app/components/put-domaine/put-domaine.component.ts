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
import { Domaine } from '../../models/domaine';
import { PutDomaineService } from '../../services/put-domaine.service';

@Component({
  selector: 'app-put-domaine',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, MatDividerModule, MatButtonModule, ReactiveFormsModule, MatCard, AuteursComponent, LivresComponent, NgFor, AsyncPipe],
  templateUrl: './put-domaine.component.html',
  styleUrl: './put-domaine.component.css'
})
export class PutDomaineComponent {

  domaine!: Domaine;

  nom = new FormControl('');
  description = new FormControl('');

  Livres$: Observable<Livre[]> = this.livreservice.getAll();

  EditDomaine() {
    const id: number = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);
    const domaine = {"id": `${id}`, "nom": `${this.nom.value}`, "description": `${this.description.value}`};
    this.putDomaineService.PutDomaineById(id, domaine).subscribe({
      next:(res)=> {localStorage.setItem("logUser", JSON.stringify(res))},
      error:(err) => {console.log(err)}
    })
    
  }

  constructor(private activatedRoute: ActivatedRoute, private putDomaineService: PutDomaineService, private livreservice: LivreService) {
    
  }
}
