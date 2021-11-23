import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  // el: ElementRef;
  // constructor(el: ElementRef) {
  //   this.el = el;
  //   // el.nativeElement.style.backgroundColor= "gray";
  // } 

  //Constructor injection
  constructor(private el: ElementRef) {
    this.el = el;
  }

  @HostBinding('style.backgroundColor') bgColor : any;
  @HostListener('mouseenter')

  onMouseEnter(){
    this.bgColor = "green";
  }
  
  @HostListener('mouseleave')

  onMouseOut(){
    this.bgColor = "red";
  }
  

  ngOnInit() {
    this.bgColor = "gray";
  }

}
