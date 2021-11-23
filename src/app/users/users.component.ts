import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,OnChanges, OnDestroy {

  @Input() name!: string;
  @Input() age!: number;
  @Input() status!: string;
  @Input() salary!: number;
  @Input() imagePath!: string;

  // event created
  @Output() childDataEvent = new EventEmitter<string>();

  passDataToParent() {
    this.childDataEvent.emit("Data From Child")
  }

  //class ka object bante hi call hota h
  //example @Input property ko access nhi milta kyunki wo component banne ke baad hi access hota h ya just pehle
  constructor() {
    console.log("constructor", this.name)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges",changes)
  }
  
  //jab component ban ke puri tarah call ho jaayega uske baad call hota h ya uske just pehle
  // register event listener
  // initially fetch data
  ngOnInit(): void {
    console.log("ngOnInit", this.name)
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }


}
