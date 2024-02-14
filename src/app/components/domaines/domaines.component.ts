import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {MatCardModule} from '@angular/material/card';
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatActionList, MatListItem} from "@angular/material/list";
import {MatCard} from "@angular/material/card";
import { Domaine } from '../../models/domaine';
import { DomaineService } from '../../services/domaine.service';

@Component({
  selector: 'app-domaines',
  standalone: true,
  imports: [MatCardModule, NgForOf, MatCard, MatActionList, MatListItem, AsyncPipe],
  templateUrl: './domaines.component.html',
  styleUrl: './domaines.component.css'
})
export class DomainesComponent {
  domaines$: Observable<Domaine[]> = this.domaineService.getAll();

  constructor(private domaineService: DomaineService) {
  }

}
