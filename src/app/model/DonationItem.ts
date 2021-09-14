
export class DonationItem{

  itemId:number;
  itemDescription:string;
  donationType : string;

    constructor(
      itemId:number,
      itemDescription:string,
      donationType : string
        ){

            this.itemId = itemId;
            this.itemDescription = itemDescription;
            this.donationType = donationType;
        }
}
