import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  currentLanguage: string = 'es';

  
  public textos: any = {
    es: {
      contacto: {
        titulo: 'Contacto',
        direccion: 'Dirección'
      },
      enlaces: {
        titulo: 'Enlaces',
        inicio: 'Inicio',
        quienSoy: 'Quién soy',
        habilidades: 'Habilidades',
        servicios: 'Servicios',
        portafolio: 'Portafolio',
        contacto: 'Contacto'
      },
      redes: {
        titulo: 'Social Media'
      }      
    },
    en: {
      contacto: {
        tiulo: 'Contact',
        direccion: 'Address'
      },
      enlaces: {
        titulo: 'Links',
        inicio: 'Home',
        quienSoy: 'About Me',
        habilidades: 'Skills',
        servicios: 'Services',
        portafolio: 'Portfolio',
        contacto: 'Contact'
      },
      redes: {
        titulo: 'Social Media'
      }
    }
  }

  constructor(private languageService: LanguageService) { }

  ngOnInit(){
    this.languageService.languageChange.subscribe((language: string) => {
      this.currentLanguage = language;
    });
  }

}
