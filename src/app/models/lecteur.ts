import { Adresse } from "./adresse";

export interface Lecteur {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    adresseId: number;
    adresse: Adresse;
}
