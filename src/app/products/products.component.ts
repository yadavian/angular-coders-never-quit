import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [
    {id: 1,name:"Ankit"},
    {id: 2,name:"Suraj"},
    {id: 3,name:"Satul"}
  ]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  go(myid:number){
    this.router.navigate(['/product',myid])
  }

}
