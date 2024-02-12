import { Lecteur } from "./lecteur";
import { Livre } from "./livre";

export interface Emprunt {
    id: number;
    DateEmprunt: Date;
    DateRetour: Date;
    LivreId: number;
    LecteurId: number;
    Livre: Livre;
    Lecteur: Lecteur
}
