import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent {

  breakpoint: number | undefined;
  currentLanguage: string = 'es';

  public textos: any = {
    es: {
      titulo: 'Sobre Mi',
      p1: `¡Hola! Mi nombre es Juan Diego Argüello Quan y soy estudiante de ingeniería mecánica e ingeniería en software.
       Desde muy joven siempre he sido muy curioso y estudioso, y me apasiona aprender sobre diferentes temas y
        áreas del conocimiento.`,
      p2: ` Me interesa mucho el emprendimiento y, en especial, aquellos que están
      involucrados en solucionar problemáticas sociales. Creo firmemente que
      la tecnología y la innovación pueden ser herramientas poderosas para
      crear un impacto positivo en la sociedad y mejorar la vida de las
      personas.`,
      p3: `Además de mi interés en la tecnología y el emprendimiento, me gusta
      dedicar mi tiempo libre a actividades al aire libre como hacer
      senderismo y acampar. También disfruto de la lectura y el cine, y
      siempre estoy buscando aprender cosas nuevas.`,
      p4: ` Como estudiante de ingeniería mecánica e ingeniería en software, estoy
      siempre en busca de nuevos desafíos y oportunidades para seguir
      aprendiendo y creciendo tanto personal como profesionalmente. Espero
      tener la oportunidad de trabajar en proyectos que me permitan aplicar
      mis conocimientos y habilidades para hacer una diferencia positiva en el
      mundo.`,
      button: 'Descargar CV'
    },
    en: {
      titulo: 'About Me',
      p1: `Hi there! My name is Juan Diego Argüello Quan and I'm a student of
      mechanical engineering and software engineering. Since I was young,
      I've always been very curious and studious, and I'm passionate about
      learning about different subjects and areas of knowledge.`,
      p2: ` I'm very interested in entrepreneurship, especially those 
      that are involved in solving social problems. I firmly believe that technology and innovation can be powerful 
      tools to create a positive impact on society and improve people's lives.`,
      p3: `In addition to my interest in technology and entrepreneurship, I enjoy spending my free time doing outdoor activities like hiking and camping. I also enjoy reading and watching movies, and I'm always looking to learn new things.`,
      p4: ` As a student of mechanical engineering and software engineering, I'm always looking for new challenges and opportunities to keep learning and growing both personally and professionally. I hope to have the opportunity to work on projects that allow me to apply my knowledge and skills to make a positive difference in the world.`,
      button: 'Download CV'
    }
  }

  constructor(private languageService: LanguageService) {
  }

  ngOnInit(){
    this.breakpoint = (window.innerWidth <= 780) ? 1:6;

    this.languageService.languageChange.subscribe((language: string) => {
      this.currentLanguage = language;
    });
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }

}
