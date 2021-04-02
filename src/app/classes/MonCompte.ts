export class MonCompte {
    
    id_utilisateur: number;
    solde: number;
    credit: number;
    type_offre: string;
    valeur_offre: string;
    date_expiration: string;

    public static fromJson(json: Object): MonCompte {

        return new MonCompte(
            json['id_utilisateur'],
            json['solde'],
            json['credit'],
            json['type_offre'],
            json['valeur_offre'],
            json['date_expiration'],
        );
    }

    constructor(id: number,solde: number,credit: number,type_offre: string,valeur_offre: string,date_expiration: string){
        
        this.id_utilisateur = id;
        this.solde = solde;
        this.credit = credit;
        this.type_offre = type_offre;
        this.valeur_offre = valeur_offre;
        this.date_expiration = date_expiration;
    }
}