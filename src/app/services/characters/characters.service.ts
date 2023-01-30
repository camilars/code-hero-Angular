import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Characters, ResponseCharacters } from './characters.type';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  PUBLIC_KEY = '0ee4d34297914d1915d8b46704b05316';
  URL_API = 'https://gateway.marvel.com:443/v1/public';

  constructor(private httpClient: HttpClient) { }

  getCharacters(limit: number, offset: number) : Observable<ResponseCharacters> {
    return this.httpClient.get<ResponseCharacters>(
      `${this.URL_API}/characters`,
      {
        params: {
          limit: limit,
          apikey: this.PUBLIC_KEY,
          offset: offset
        }
      }
    )
    .pipe(
      map((response) => {
        return response;
      })
    );
  }
}
