import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {MatCardModule} from '@angular/material/card';
import {AsyncPipe, DatePipe, NgForOf} from "@angular/common";
import {MatActionList, MatListItem} from "@angular/material/list";
import {MatCard} from "@angular/material/card";
import { Emprunt } from '../../models/emprunt';
import { EmpruntService } from '../../services/emprunt.service';

@Component({
  selector: 'app-emprunts',
  standalone: true,
  imports: [MatCardModule, NgForOf, MatCard, MatActionList, MatListItem, AsyncPipe, DatePipe],
  templateUrl: './emprunts.component.html',
  styleUrl: './emprunts.component.css'
})
export class EmpruntsComponent {
  emprunts$: Observable<Emprunt[]> = this.empruntService.getAll();

  constructor(private empruntService: EmpruntService) {
  }

}
