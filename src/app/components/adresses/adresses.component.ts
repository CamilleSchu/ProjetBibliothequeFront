import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Adresse } from '../../models/adresse';
import { AdresseService } from '../../services/adresse.service';
import {MatCardModule} from '@angular/material/card';
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatActionList, MatListItem} from "@angular/material/list";
import {MatCard} from "@angular/material/card";

@Component({
  selector: 'app-adresses',
  standalone: true,
  imports: [MatCardModule, NgForOf, MatCard, MatActionList, MatListItem, AsyncPipe],
  templateUrl: './adresses.component.html',
  styleUrl: './adresses.component.css'
})

export class AdressesComponent {
  
  adresses$: Observable<Adresse[]> = this.adresseService.getAll();

  constructor(private adresseService: AdresseService) {
  }
}
