 
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap, Route } from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  userId !:string | null

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
 this.route.paramMap.subscribe((params:ParamMap)=>{
   this.userId = params.get('id')
 })

  }

}
