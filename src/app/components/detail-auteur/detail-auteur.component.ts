import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {MatCardModule} from '@angular/material/card';
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatActionList, MatListItem} from "@angular/material/list";
import {MatCard} from "@angular/material/card";
import { DetailAuteurService } from '../../services/detail-auteur.service';
import { ActivatedRoute } from '@angular/router';
import { Auteur } from '../../models/auteur';

@Component({
  selector: 'app-detail-auteur',
  standalone: true,
  imports: [MatCardModule, NgForOf, MatCard, MatActionList, MatListItem, AsyncPipe],
  templateUrl: './detail-auteur.component.html',
  styleUrl: './detail-auteur.component.css'
})
export class DetailAuteurComponent implements OnInit{

  auteur!: Auteur;

  ngOnInit(): void {
    const id: number = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);
    this.detailAuteurService
      .fetchAuteurById(id)
      .subscribe({
        next: (data) => {
          this.auteur = data;
        },
        error: (err) => console.error(err)
      });
  }

  constructor(private activatedRoute: ActivatedRoute, private detailAuteurService: DetailAuteurService) {
  }
}
