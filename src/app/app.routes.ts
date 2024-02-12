import { Routes } from '@angular/router';
import { AdressesComponent } from './components/adresses/adresses.component';
import { AuteursComponent } from './components/auteurs/auteurs.component';
import { DomainesComponent } from './components/domaines/domaines.component';
import { LivresComponent } from './components/livres/livres.component';
import { LecteursComponent } from './components/lecteurs/lecteurs.component';
import { EmpruntsComponent } from './components/emprunts/emprunts.component';

export const routes: Routes = [
    {path: 'auteurs', component: AuteursComponent},
    {path: 'domaines', component: DomainesComponent},
    {path: 'adresses', component: AdressesComponent},
    {path: 'livres', component: LivresComponent},
    {path: 'lecteurs', component: LecteursComponent},
    {path: 'Emprunts', component: EmpruntsComponent}
];
