import { Address } from "./Address";

export class Donor{

    donorId:number;
    donorName:string;
    donorEmail:string;
    donorPhone: string;
    donorUsername: string;
    donorPassword: string;
    address: Address;

    constructor(
        donorId:number,
        donorName:string,
        donorEmail:string,
        donorPhone: string,
        donorUsername: string,
        donorPassword: string,
        address: Address){

            this.donorId = donorId;
            this.donorName = donorName;
            this.donorEmail = donorEmail;
            this.donorPhone = donorPhone;
            this.donorUsername = donorUsername;
            this.donorPassword = donorPassword;
            this.address = address;

        }
}
