import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name:string = "ankit rama yadav";
  age:number = 25;
  status:string = "IT Consultant"
  salary:number = 200;

  btnColor:string = "btn red";
  isDisabled:boolean = true;

  inputValue:string = "Ankit"

  
  fruits:string[]= ["banana","apple","mango","grapes","orange"];

  myDate! :Date;

  getName(): string{
    return "I am from Mumbai"
  }

  constructor() {
    const colors  = ["red","pink","yellow","blue","green","black"];
    this.btnColor = "btn "+ colors[Math.floor(Math.random() * 5)];

    setTimeout(() => {
      this.isDisabled = false
    }, 3000);

   }

   showSalary(){
     alert(this.salary * 70)
   }

   getInput(e:any){
     console.log(e.target.value);
     this.inputValue = e.target.value;
   }

  ngOnInit(): void {
  }

}
