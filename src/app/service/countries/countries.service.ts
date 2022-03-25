import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Country, CountryDto} from "src/app/interface/countries/countries.interface";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<Country[]> {
    /* http get request to rescountires.com that gets all the countries */
    return this.http.get<CountryDto[]>('https://restcountries.com/v3.1/all').pipe(
      map(arr => arr.map(c => this.convertCountryFromDto(c)))
    );
  }
  public search(str:string): Observable<Country[]> {
    /* return all countries that contain the str string */
    return this.http.get<CountryDto[]>(`https://restcountries.com/v3.1/name/${str}`).pipe(
      map(arr => arr.map(c => this.convertCountryFromDto(c)))
    );
  }

  private convertCountryFromDto(c:CountryDto):Country{
    /* return the details in the Country template */
    return {name:c.name.common, flag:c.flags.svg};
  }
}
