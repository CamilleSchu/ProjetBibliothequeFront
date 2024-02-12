import { Livre } from "./livre";

export interface Auteur {
    id: number;
    Nom: string;
    Prenom: string;
    Email: string;
    Telephone: string;
    Grade: string;
    Livres: Livre[];
}
