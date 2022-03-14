import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Country, CountryDto} from "./countries.interface";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<Country[]> {
    return this.http.get<CountryDto[]>('https://restcountries.com/v3.1/all').pipe(
      map(arr => arr.map(c => this.convertCountryFromDto(c)))
    );
  }
  public search(str:string): Observable<Country[]> {
    return this.http.get<CountryDto[]>(`https://restcountries.com/v3.1/name/${str}`).pipe(
      map(arr => arr.map(c => this.convertCountryFromDto(c)))
    );
  }

  private convertCountryFromDto(c:CountryDto):Country{
    return {name:c.name.common,flag:c.flags.svg};
  }
}
