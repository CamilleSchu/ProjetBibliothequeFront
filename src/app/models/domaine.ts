import { Livre } from "./livre";

export interface Domaines {
    id: number;
    Nom: string;
    Description: string;
    Livres: Livre[];
}
