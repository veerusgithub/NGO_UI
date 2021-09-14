import {DonationItem} from "./DonationItem";

export class Donation{

  donationId:number;
  donationAmount:number;
  donationDate:Date;
  donorId: number;
  donationItem : DonationItem;


    constructor(
      donationId:number,
      donationAmount:number,
      donationDate:Date,
      donorId: number,
      donationItem: DonationItem){

            this.donationId = donationId;
            this.donationAmount = donationAmount;
            this.donationDate = donationDate;
            this.donorId = donorId;
            this.donationItem = donationItem;

        }
}
