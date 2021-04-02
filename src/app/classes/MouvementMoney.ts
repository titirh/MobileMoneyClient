export class MouvementMoney {

    id_mouvement: number;
    id_compte1: number;
    id_compte2: number;
    type: string;
    montant: number;
    date_mouvement: string;
    status: string;

    constructor(
        id_mouvement: number,
        id_compte1: number,
        id_compte2: number,
        type: string,
        montant: number,
        date_mouvement: string,
        status: string,
    ){
        this.id_mouvement = id_mouvement;
        this.id_compte1 = id_compte1;
        this.id_compte2  = id_compte2;
        this.type = type;
        this.montant = montant;
        this.date_mouvement = date_mouvement;
        this.status = status;
    }

    public static fromJson(json: Object){

        return new MouvementMoney(

            json['id_mouvement'],
            json['id_compte1'],
            json['id_compte2'],
            json['type'],
            json['montant'],
            json['date_mouvement'],
            json['status'],
        );
    }
}