import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {MatCardModule} from '@angular/material/card';
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatActionList, MatListItem} from "@angular/material/list";
import {MatCard} from "@angular/material/card";
import { ActivatedRoute } from '@angular/router';
import { Domaine } from '../../models/domaine';
import { DeleteDomaineService } from '../../services/delete-domaine.service';

@Component({
  selector: 'app-delete-domaine',
  standalone: true,
  imports: [MatCardModule, NgForOf, MatCard, MatActionList, MatListItem, AsyncPipe],
  templateUrl: './delete-domaine.component.html',
  styleUrl: './delete-domaine.component.css'
})
export class DeleteDomaineComponent {
  domaine!: Domaine;

  ngOnInit(): void {
    const id: number = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);
    this.deleteDomaineService
      .DeleteById(id)
      .subscribe({
        next: (data) => {
          this.domaine = data;
        },
        error: (err) => console.error(err)
      });
  }

  constructor(private activatedRoute: ActivatedRoute, private deleteDomaineService: DeleteDomaineService) {
  }
}
