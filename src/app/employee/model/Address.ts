export class Address{
    
    city:string;
    state:string;
    pin:string;
    landmark: string;

    constructor(city:string, state:string, pin:string, 
         landmark: string){
           
            this.city = city;
            this.state = state;
            this.pin = pin;
            this.landmark = landmark;

        }
}