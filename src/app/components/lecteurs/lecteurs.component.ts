import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Lecteur } from '../../models/lecteur';
import { LecteursService } from '../../services/lecteur.service';
import {MatCardModule} from '@angular/material/card';
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatActionList, MatListItem} from "@angular/material/list";
import {MatCard} from "@angular/material/card";

@Component({
  selector: 'app-lecteurs',
  standalone: true,
  imports: [MatCardModule, NgForOf, MatCard, MatActionList, MatListItem, AsyncPipe],
  templateUrl: './lecteurs.component.html',
  styleUrl: './lecteurs.component.css'
})
export class LecteursComponent {
  
  lecteurs$: Observable<Lecteur[]> = this.lecteurService.getAll();

  constructor(private lecteurService: LecteursService) {
  }
}
