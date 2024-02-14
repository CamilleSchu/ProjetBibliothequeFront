import { Lecteur } from "./lecteur";
import { Livre } from "./livre";

export interface Emprunt {
    id: number;
    dateEmprunt: Date;
    dateRetour: Date;
    livreId: number;
    lecteurId: number;
    livre: Livre;
    lecteur: Lecteur
}
