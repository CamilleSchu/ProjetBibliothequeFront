import { Routes } from '@angular/router';
import { AdressesComponent } from './components/adresses/adresses.component';
import { AuteursComponent } from './components/auteurs/auteurs.component';
import { DomainesComponent } from './components/domaines/domaines.component';
import { LivresComponent } from './components/livres/livres.component';
import { LecteursComponent } from './components/lecteurs/lecteurs.component';
import { EmpruntsComponent } from './components/emprunts/emprunts.component';
import { MainComponent } from './components/main/main.component';
import { AddAuteurComponent } from './components/add-auteur/add-auteur.component';
import { DetailAuteurComponent } from './components/detail-auteur/detail-auteur.component';
import { DeleteAuteurComponent } from './components/delete-auteur/delete-auteur.component';
import { PutAuteurComponent } from './components/put-auteur/put-auteur.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/home'},
    {path: 'home', component: MainComponent},
    {path: 'auteurs', component: AuteursComponent},
    {path: 'auteurs/create', component: AddAuteurComponent},
    {path: 'auteurs/:id', component: DetailAuteurComponent},
    {path: 'auteurs/delete/:id', component: DeleteAuteurComponent},
    {path: 'auteurs/modifier/:id', component: PutAuteurComponent},
    {path: 'domaines', component: DomainesComponent},
    {path: 'adresses', component: AdressesComponent},
    {path: 'livres', component: LivresComponent},
    {path: 'lecteurs', component: LecteursComponent},
    {path: 'Emprunts', component: EmpruntsComponent}
];
