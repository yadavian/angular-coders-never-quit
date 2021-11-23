import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-component-b1',
  templateUrl: './component-b1.component.html',
  styleUrls: ['./component-b1.component.css']
})
export class ComponentB1Component implements OnInit {

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
  }

  showCounter() {
    return this.counterService.getCounter()
  }

  
  updateCounter() {
    return this.counterService.updateCounter()
  }

}
