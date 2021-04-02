export class Appel {
    
    id_appel: number;
    numero_entrant: string;
    numero_sortant: string;
    dureeAppel: number;
    date_appel: string;

    public static fromJson(json: Object): Appel {
        return new Appel(
            json['id_appel'],
            json['numero_entrant'],
            json['numero_sortant'],
            json['dureeAppel'],
            json['date_appel'],
        );
    }

    public setNumeroEntrant(num: string){
        this.numero_entrant = num;
    }
    
    public setNumeroSortant(num: string){
        this.numero_sortant = num;
    }

    public setDureeAppel(duree: number){
        this.dureeAppel = duree;
    }

    constructor(id: number,numero_entrant: string,numero_sortant: string,duree: number,date_appel: string){
        
        this.id_appel = id;
        this.numero_entrant = numero_entrant;
        this.numero_sortant = numero_sortant;
        this.dureeAppel = duree;
        this.date_appel = date_appel;
    }
}