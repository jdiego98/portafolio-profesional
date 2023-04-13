import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  dispositivos: boolean = false;
  breakpoint:number | undefined; 
  currentLanguage: string = 'es';
  public textos: any = {
    es: {
      inicio: 'Inicio',
      quienSoy: 'Quién soy',
      habilidades: 'Habilidades',
      servicios: 'Servicios',
      portafolio: 'Portafolio',
      contacto: 'Contacto'
    },
    en: {
      inicio: 'Home',
      quienSoy: 'About me',
      habilidades: 'Skills',
      servicios: 'Services',
      portafolio: 'Portfolio',
      contacto: 'Contact'
    }
  }

  constructor(private languageService: LanguageService) {
  }

  ngOnInit(){
    this.dispositivos = (window.innerWidth <= 820) ? true:false;

    this.languageService.languageChange.subscribe((language: string) => {
      this.currentLanguage = language;
    });

  }

  toggleLanguage(): void {
    if(this.languageService.getLanguage() === 'es'){
      this.languageService.setLanguage('en');
    }else {
      this.languageService.setLanguage('es');
    }
  }
}
