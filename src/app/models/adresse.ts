import { Lecteur } from "./lecteur";

export interface Adresse {
    Id: number;
    Appartement: string;
    Rue: string;
    Ville: string;
    CodePostale: string;
    Pays: string;
    Lecteurs: Lecteur[];
}
