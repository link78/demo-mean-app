import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';



@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

createDb() {
  const heroes = [
    
{ id: 11, name: 'Dr Nice', color: 'Green' },
{ id: 12, name: 'Narco', color: 'Dark-Light' },
{ id: 13, name: 'Bombasto',color: 'Redish' },
{ id: 14, name: 'Celeritas', color: 'Blue-Yellow' },
{ id: 15, name: 'Magneta',color: 'Gray-Black' },
{ id: 16, name: 'RubberMan',color: 'Purple' },
{ id: 17, name: 'Dynama',color: 'White-DarkBlue' },
{ id: 18, name: 'Dr IQ',color: 'Black-red' },
{ id: 19, name: 'Magma',color: 'Yellow-Green' },
{ id: 20, name: 'Tornado',color: 'Red-Yellow-Green' }
]
return {heroes};
}

genId(heroes: Hero[]): number {
  return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1: 11;
}

  constructor() { }
}
