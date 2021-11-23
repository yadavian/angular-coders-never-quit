import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { JokeService } from '../services/joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  joke: string = 'LOADING...'
  // http: HttpClient;
  // constructor(http: HttpClient) {
  //   this.http = http;
  // }

  // DEPENDENCY / CONSTRUCTOR  -  INJECTION
  // constructor(private http: HttpClient) {
  // }

  constructor(private jokeService: JokeService) {
  }

  ngOnInit(): void {
    this.fetchData()

  }

  // fetchData(){
  //   this.http.get('https://api.chucknorris.io/jokes/random?category=dev') //return observable
  //   .subscribe((data:any)=>{
  //     this.joke = data.value;
  //   })
  // }

  fetchData() {
    this.jokeService.getJoke()
      .subscribe((data: any) => {
        this.joke = data.value;
      }
      );
  }

}
