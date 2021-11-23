import { Component } from '@angular/core';
import { UserModel } from './model/userModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutorial-angular';
  phone : number = 9594371397;
  users: Array<UserModel> = [
    { name: "Ankit", age: 25, status: "IT Consultant", salary: 37500, imagePath: "assets/u1.jpg" },
    { name: "Suraj", age: 23, status: "IT Consultant", salary: 37500, imagePath: "assets/u2.jpg" },
    { name: "Satyam", age: 23, status: "Manager", salary: 55000, imagePath: "assets/u3.png" },
  ];

  inputValue = "Ankit";
  show = true;

  getDataFromChildEvent(e: any) {
    console.log(e)
  }

}
