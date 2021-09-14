import { Address } from "./Address";


export class Employee{
    employeeId: number;
    employeeName: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    address: Address;

    constructor(employeeId: number,
        employeeName: string,
        email: string,
        phone: string,
        username: string,
        password: string,
        address: Address){
            this.employeeId = employeeId;
            this.employeeName = employeeName;
            this.phone = phone;
            this.email = email;
            this.username = username;
            this.password = password;
            this.address = address;

        }
}
