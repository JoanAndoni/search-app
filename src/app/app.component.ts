import { Component } from '@angular/core';
import houses from '../assets/mock-data/houses.json';

interface House {
  country: string;
  address: string;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  searchValue: string;
  filteredHouses: House[] = houses;
  
  constructor() {
    this.searchValue = '';
  }

  makeSearch() {
    this.filteredHouses = houses.filter((house: House) => {
      return (house.country.includes(this.searchValue) || house.address.includes(this.searchValue));
    });
  }

}
