import { Component, HostBinding, HostListener, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host:{
    class: 'control',
    '(click)': 'console.log("Hi")'
  }
})
export class ControlComponent {
  @HostListener('click')   onClick(){
    console.log('Clicked!');
  }

  label = input.required<string>();


}
