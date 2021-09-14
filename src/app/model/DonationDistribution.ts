import {DonationItem} from "./DonationItem";

export class DonationDistribution{

  distributionId:number;
  amountDistributed:number;
  dateOfDistribution:Date;
  approvalOrRejectedDate: Date;
  status: string;
  donationItem : DonationItem;


    constructor(
      distributionId:number,
      amountDistributed:number,
      dateOfDistribution:Date,
      approvalOrRejectedDate:Date,
      status: string,
      donationItem: DonationItem){

            this.distributionId = distributionId;
            this.amountDistributed = amountDistributed;
            this.dateOfDistribution = dateOfDistribution;
            this.approvalOrRejectedDate= approvalOrRejectedDate;
            this.status = status;
            this.donationItem = donationItem;

        }
}
