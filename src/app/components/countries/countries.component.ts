import { Component } from '@angular/core';

@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
})
export class CountriesComponent {
  countriesList: string[] = ['England', 'India', 'Japan'];
  cities: object = {
    England: ['London', 'Bristol', 'Manchester', 'Exeter'],
    India: ['Mumbai', 'Bangalore'],
    Japan: ['Tokyo', 'Kyoto'],
  };
}
