import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York city, city which never sleep.',
      'https://imgs.6sqft.com/wp-content/uploads/2014/06/21042534/Felix_Warburg_Mansion_007.jpg',
      149.99),
      new Place(
      'p2',
      'L\' Amour Toujours',
      'A romanic place in paris. City of Love and Romance.',
      'https://myvirtualplayground.files.wordpress.com/2018/12/DSC06705-1024x1024.jpg',
      249.99
      ),
      new Place(
      'p3',
      'The Foggy Place',
      'Not your average city trip.',
      'https://c8.alamy.com/comp/KHW06W/pena-palace-romanticist-castle-in-a-foggy-autumn-day-at-sintra-portugal-KHW06W.jpg',
      349.99
      )
  ];

  constructor() { }

  get places() {
    return [...this._places];
  }
  getPlace(id: string){
    return {...this._places.find(p => p.id === id)};
  }
}
