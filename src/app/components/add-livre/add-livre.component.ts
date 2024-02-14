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
import { AddLivreService } from '../../services/add-livre.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-livre',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, MatDividerModule, MatButtonModule, ReactiveFormsModule, MatCard, AuteursComponent, LivresComponent, NgFor, AsyncPipe],
  templateUrl: './add-livre.component.html',
  styleUrl: './add-livre.component.css'
})
export class AddLivreComponent {
  titre = new FormControl('');
  nombrepages = new FormControl('');
  etat = new FormControl('');
  auteurId = new FormControl('');
  DomaineId = new FormControl('');

  livres$: Observable<Livre[]> = this.livreservice.getAll();

  createLivre() {
    const id: number = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);
    const livre = {"titre": `${this.titre.value}`, "nombrepages": `${this.nombrepages.value}`, "etat": `${this.etat.value}`,
     //"auteurId": parseInt(`${id}`), "DomaineId": parseInt(`${this.DomaineId.value}`)
    };
    this.addLivreService.postAll(livre).subscribe({
      next:(res)=> {localStorage.setItem("logUser", JSON.stringify(res))},
      error:(err) => {console.log(err)}
    })
  }

  constructor(private activatedRoute: ActivatedRoute, private addLivreService: AddLivreService, private livreservice: LivreService) {
    
  }
}
