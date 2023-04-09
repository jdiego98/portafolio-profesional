import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {

  cards = [
    { title: 'TOM & MARA', image: 'https://res.cloudinary.com/dmdpbza13/image/upload/v1680323689/Portafolio%20Profesional/portafolio-3_rebywv.png', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Esfera Construcciones', image: 'https://res.cloudinary.com/dmdpbza13/image/upload/v1680323687/Portafolio%20Profesional/portafolio-4_ckxoeh.png', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Vista.DT', image: 'https://res.cloudinary.com/dmdpbza13/image/upload/v1680323684/Portafolio%20Profesional/portafolio-2_qnn7oj.png', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { title: 'Autono', image: 'https://res.cloudinary.com/dmdpbza13/image/upload/v1680324142/Portafolio%20Profesional/portafolio-1_latty9.png', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
  ];

  public isMobile: boolean = false;
  public colSize: number = 4;


  constructor(public dialog: MatDialog, breakpoinObserver: BreakpointObserver) {

    // breakpoinObserver.observe([Breakpoints.Handset]).subscribe(res =>{

    breakpoinObserver.observe(['(max-width: 980px)']).subscribe(res =>{
        console.log(res.matches)
        this.isMobile = res.matches
        if(this.isMobile){
          this.colSize = 1;          
        }else{
          this.colSize = 4;         
        }
      })

    
  }
}
