import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-habilidades-blandas',
  templateUrl: './habilidades-blandas.component.html',
  styleUrls: ['./habilidades-blandas.component.css']
})
export class HabilidadesBlandasComponent {

  public cards: any = {
    en: [
      { title: 'Creativity',image: `https://res.cloudinary.com/dmdpbza13/image/upload/v1681494398/Portafolio%20Profesional/Creatividad_i51kfu.png`, content: 'I am a highly creative person, capable of generating innovative ideas and original solutions to challenges. I have used my creativity in design, marketing, and advertising projects, and I am constantly looking for ways to think outside the box to improve processes and products. Additionally, I have the ability to communicate my ideas clearly and persuasively.' },
      { title: 'Leadership',image: `https://res.cloudinary.com/dmdpbza13/image/upload/v1681494398/Portafolio%20Profesional/Liderazgo_v7u2nq.png`, content: 'As a leader, I have demonstrated my ability to guide teams towards success. I am a compassionate and empathetic leader, who values the perspectives and needs of each team member. I have led teams in large-scale projects, and I have effectively coordinated tasks, resources, and timelines. I am committed to the professional development of my team and always seek opportunities to motivate and empower them.' },
      { title: 'Critical Thinking',image: `https://res.cloudinary.com/dmdpbza13/image/upload/v1681494398/Portafolio%20Profesional/Pensamiento-critico_ofqjpp.png`, content: 'I am an analytical and rigorous person, capable of evaluating complex information and situations from multiple perspectives. I have used my critical thinking skills in projects involving data analysis, business strategies, and important decision-making. I always value evidence and logic in my decision-making and seek opportunities to learn and grow in my critical thinking.' }
    ],
    es: [
      { title: 'Creatividad', image: `https://res.cloudinary.com/dmdpbza13/image/upload/v1681494398/Portafolio%20Profesional/Creatividad_i51kfu.png`, content: 'Soy una persona altamente creativa, capaz de generar ideas innovadoras y soluciones originales a los desafíos. He utilizado mi creatividad en proyectos de diseño, marketing y publicidad, y estoy constantemente buscando formas de pensar fuera de la caja para mejorar procesos y productos. Además, tengo la habilidad de comunicar mis ideas con claridad y persuasión.' },
      { title: 'Liderazgo', image: `https://res.cloudinary.com/dmdpbza13/image/upload/v1681494398/Portafolio%20Profesional/Liderazgo_v7u2nq.png`, content: 'Como líder, he demostrado mi habilidad para guiar equipos hacia el éxito. Soy un líder compasivo y empático, que valora las perspectivas y necesidades de cada miembro del equipo. He liderado equipos en proyectos de gran envergadura, y he coordinado eficazmente tareas, recursos y plazos. Además, estoy comprometido con el desarrollo profesional de mi equipo y siempre busco oportunidades para motivarlos y capacitarlos.' },
      { title: 'Pensamiento Crítico', image: `https://res.cloudinary.com/dmdpbza13/image/upload/v1681494398/Portafolio%20Profesional/Pensamiento-critico_ofqjpp.png`, content: 'Soy una persona analítica y rigurosa, capaz de evaluar información y situaciones complejas desde múltiples perspectivas. He utilizado mi pensamiento crítico en proyectos que involucran análisis de datos, estrategias de negocios y toma de decisiones importantes. Siempre valoro la evidencia y la lógica en mi toma de decisiones, y busco oportunidades para aprender y crecer en mi pensamiento crítico.' }
    ]
  };
    
 public textos: any = {
    en: {
      titulo: 'Soft Skills'
    },
    es: {
      titulo: 'Habilidades Blandas'
    }   
  };




  public isMobile: boolean = false;
  public colSize: number = 3;

   currentLanguage: string = 'es';
  
  constructor(public dialog: MatDialog,
     breakpoinObserver: BreakpointObserver,
     private languageService: LanguageService,
     ) {

    breakpoinObserver.observe(['(max-width: 980px)']).subscribe(res =>{
        console.log(res.matches)
        this.isMobile = res.matches
        if(this.isMobile){
          this.colSize = 1;          
        }else{
          this.colSize = 3;         
        }
      })
    }

   ngOnInit(){
    this.languageService.languageChange.subscribe((language: string) => {
      this.currentLanguage = language;
    });
  }


}
