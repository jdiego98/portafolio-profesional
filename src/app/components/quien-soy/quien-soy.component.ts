import { Component } from '@angular/core';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent {

  breakpoint: number | undefined;

  ngOnInit(){
    this.breakpoint = (window.innerWidth <= 780) ? 1:6;
    console.log(this.breakpoint)
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }

}
