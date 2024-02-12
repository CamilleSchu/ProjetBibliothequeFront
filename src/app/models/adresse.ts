import { Lecteur } from "./lecteur";

export interface Adresse {
    id: number;
    Appartement: string;
    Rue: string;
    Ville: string;
    CodePostale: string;
    Pays: string;
    Lecteur: Lecteur[];
}
