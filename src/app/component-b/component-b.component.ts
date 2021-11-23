import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css'],
  providers:[CounterService]
})
export class ComponentBComponent implements OnInit {

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
