import { Injectable } from '@angular/core';
import { Hero } from './hero'; // hero class 
import { HEROES } from './mock-heroes'; //mock data

import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
private herourl = 'api/heroes';
httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

  constructor(
    private messageService: MessageService,
    private http: HttpClient
    ) { }

  getHeroes(): Observable<Hero[]> {
   
    return this.http.get<Hero[]>(this.herourl)
    .pipe(
      catchError(this.handleError<Hero[]>('getHeroes',[]))
    ) // THIS class will return all the data
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.herourl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

 updateHero(hero: Hero): Observable<any> {
   return this.http.put(this.herourl, hero, this.httpOptions)
   .pipe(
     catchError(this.handleError<any>(`updateHero`))
   );
 }

 addHero(hero: Hero): Observable<Hero> {
   return this.http.post<Hero>(this.herourl, hero, this.httpOptions)
   .pipe(
     catchError(this.handleError<Hero>('addHero'))
   );
 }

 deleteHero(hero: Hero | number): Observable<Hero> {
   const id = typeof hero === 'number' ? hero : hero.id;
   const url = `${this.herourl}/${id}`;

   return this.http.delete<Hero>(url, this.httpOptions)
   .pipe( tap(_ => this.log(`deleted hero id=${id}`)),
     catchError(this.handleError<Hero>('deleteHero')));
 }

 searchHeroes(term: string): Observable<Hero[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Hero[]>(`${this.herourl}/?name=${term}`).pipe(
    tap(_ => this.log(`found heroes matching "${term}"`)),
    catchError(this.handleError<Hero[]>('searchHeroes', []))
  );
}



  private handleError<T>(operation = 'operation', result?: T){
    return (error: any):Observable<T> => {
      console.error(error);
      return of (result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
