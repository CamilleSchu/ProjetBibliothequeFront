import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {MatCardModule} from '@angular/material/card';
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatActionList, MatListItem} from "@angular/material/list";
import {MatCard} from "@angular/material/card";
import { Auteur } from '../../models/auteur';
import { AuteurService } from '../../services/auteur.service';

@Component({
  selector: 'app-auteurs',
  standalone: true,
  imports: [MatCardModule, NgForOf, MatCard, MatActionList, MatListItem, AsyncPipe],
  templateUrl: './auteurs.component.html',
  styleUrl: './auteurs.component.css'
})
export class AuteursComponent {
  auteurs$: Observable<Auteur[]> = this.auteurService.getAll();

  constructor(private auteurService: AuteurService) {
  }

}
