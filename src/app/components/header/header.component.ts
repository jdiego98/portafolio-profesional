import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isSpanish: boolean = false;
  dispositivos: boolean = false;
  breakpoint:number | undefined; 
  
  constructor() {
  }

  ngOnInit(){
  this.dispositivos = (window.innerWidth <= 820) ? true:false;
    console.log(this.dispositivos)
  }

  toggleLanguage(): void {
    this.isSpanish = !this.isSpanish;
  }
}
