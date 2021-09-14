import { Address } from "./Address";

export class NeedyPeople{

    needyPersonId: number;
    needyPersonName: string;
    phone: string;
    familyIncome: string;
    username: string;
    password: string;
    address:Address;

    constructor(
        needyPersonId: number,
        needyPersonName: string,
        familyIncome: string,
        phone: string,
        username :string,
        password:string,
        address:Address
        ){
            this.needyPersonId= needyPersonId;
            this.needyPersonName = needyPersonName;
            this.phone = phone;
            this.familyIncome = familyIncome;
            this.username=username;
            this.password =password;
            this.address = address;

        }
}
