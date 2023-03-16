import { Component } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {

  cards = [
    { title: 'Servicio 1', image: '', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Servicio 2', image: '', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Servicio 3', image: '', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { title: 'Servicio 4', image: '', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
  ];
}
