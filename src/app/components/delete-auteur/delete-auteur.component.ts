import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {MatCardModule} from '@angular/material/card';
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatActionList, MatListItem} from "@angular/material/list";
import {MatCard} from "@angular/material/card";
import { Auteur } from '../../models/auteur';
import { DeleteAuteurService } from '../../services/delete-auteur.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-auteur',
  standalone: true,
  imports: [MatCardModule, NgForOf, MatCard, MatActionList, MatListItem, AsyncPipe],
  templateUrl: './delete-auteur.component.html',
  styleUrl: './delete-auteur.component.css'
})
export class DeleteAuteurComponent implements OnInit{
  auteur!: Auteur;

  ngOnInit(): void {
    const id: number = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);
    this.deleteAuteurService
      .DeleteById(id)
      .subscribe({
        next: (data) => {
          this.auteur = data;
        },
        error: (err) => console.error(err)
      });
  }

  constructor(private activatedRoute: ActivatedRoute, private deleteAuteurService: DeleteAuteurService) {
  }
}
