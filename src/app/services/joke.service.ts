import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  // DEPENDENCY / CONSTRUCTOR  -  INJECTION
  constructor(private http: HttpClient) {
  }

  getJoke() {
    //return observable
    return this.http.get('https://api.chucknorris.io/jokes/random?category=dev');
  }

}
