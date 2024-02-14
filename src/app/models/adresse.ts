import { Lecteur } from "./lecteur";

export interface Adresse {
    id: number;
    appartement: string;
    rue: string;
    ville: string;
    codePostale: string;
    pays: string;
    lecteurs: Lecteur[];
}
