import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {MatCardModule} from '@angular/material/card';
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatActionList, MatListItem} from "@angular/material/list";
import {MatCard} from "@angular/material/card";
import { DetailAuteurService } from '../../services/detail-auteur.service';
import { ActivatedRoute } from '@angular/router';
import { Auteur } from '../../models/auteur';
import { Domaine } from '../../models/domaine';
import { DetailDomaineService } from '../../services/detail-domaine.service';

@Component({
  selector: 'app-detail-domaine',
  standalone: true,
  imports: [MatCardModule, NgForOf, MatCard, MatActionList, MatListItem, AsyncPipe],
  templateUrl: './detail-domaine.component.html',
  styleUrl: './detail-domaine.component.css'
})
export class DetailDomaineComponent implements OnInit{
  domaine!: Domaine;

  ngOnInit(): void {
    const id: number = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);
    this.detailDomaineService
      .fetchDomaineById(id)
      .subscribe({
        next: (data) => {
          this.domaine = data;
        },
        error: (err) => console.error(err)
      });
  }

  constructor(private activatedRoute: ActivatedRoute, private detailDomaineService: DetailDomaineService) {
  }
}
