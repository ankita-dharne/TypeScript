import * as faker from 'faker';
import {Mappable } from './CustomMaps';

export class Company implements Mappable{
    companyName: String;
    catchPhrase: String;
    location:{
        lat:number;
        lng:number;
    };

    constructor(){
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }

    markerContent(){
        return `
        <div>
        <h1>Company Name: ${this.companyName}<h1>
        <h3>Catchphrase: ${this.catchPhrase}<h3>
        </div>
        `;
    }

    color: string = 'blue';

}
