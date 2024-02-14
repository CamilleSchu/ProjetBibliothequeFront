import { Auteur } from "./auteur";
import { Domaine } from "./domaine";
import { Emprunt } from "./emprunt";
import { Lecteur } from "./lecteur";

export interface Livre {
    id: number;
    titre: string;
    nombrepages: string;
    etat: string;
    auteurId: number;
    DomaineId: number;
}
