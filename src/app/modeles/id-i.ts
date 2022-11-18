export interface IdI {
    id:string | number;
    pass:string | number;
}
export interface UserI {
    uid:string |number;
    nom:string;
    prenoms:Array<string>;
    statut?:string;
}
