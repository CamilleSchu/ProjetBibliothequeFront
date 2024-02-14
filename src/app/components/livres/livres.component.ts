import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {MatCardModule} from '@angular/material/card';
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatActionList, MatListItem} from "@angular/material/list";
import {MatCard} from "@angular/material/card";
import { Livre } from '../../models/livre';
import { LivreService } from '../../services/livre.service';

@Component({
  selector: 'app-livres',
  standalone: true,
  imports: [MatCardModule, NgForOf, MatCard, MatActionList, MatListItem, AsyncPipe],
  templateUrl: './livres.component.html',
  styleUrl: './livres.component.css'
})
export class LivresComponent {
  livres$: Observable<Livre[]> = this.livreService.getAll();

  constructor(private livreService: LivreService) {
  }
}
