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
import { AddDomaineComponent } from './components/add-domaine/add-domaine.component';
import { DetailDomaineComponent } from './components/detail-domaine/detail-domaine.component';
import { DeleteDomaineComponent } from './components/delete-domaine/delete-domaine.component';
import { PutDomaineComponent } from './components/put-domaine/put-domaine.component';
import { AddLivreComponent } from './components/add-livre/add-livre.component';
import { DetailLivreComponent } from './components/detail-livre/detail-livre.component';
import { DeleteLivreComponent } from './components/delete-livre/delete-livre.component';
import { PutLivreComponent } from './components/put-livre/put-livre.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/home'},
    {path: 'home', component: MainComponent},
    {path: 'auteurs', component: AuteursComponent},
    {path: 'auteurs/create', component: AddAuteurComponent},
    {path: 'auteurs/:id', component: DetailAuteurComponent},
    {path: 'auteurs/delete/:id', component: DeleteAuteurComponent},
    {path: 'auteurs/modifier/:id', component: PutAuteurComponent},
    {path: 'domaines', component: DomainesComponent},
    {path: 'domaines/create', component: AddDomaineComponent},
    {path: 'domaines/:id', component: DetailDomaineComponent},
    {path: 'domaines/delete/:id', component: DeleteDomaineComponent},
    {path: 'domaines/modifier/:id', component: PutDomaineComponent},
    {path: 'adresses', component: AdressesComponent},
    {path: 'livres', component: LivresComponent},
    {path: 'livres/create/:id', component: AddLivreComponent},
    {path: 'livres/:id', component: DetailLivreComponent},
    {path: 'livres/delete/:id', component: DeleteLivreComponent},
    {path: 'livres/modifier/:id', component: PutLivreComponent},
    {path: 'lecteurs', component: LecteursComponent},
    {path: 'Emprunts', component: EmpruntsComponent}
];
