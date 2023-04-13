import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LanguageService } from 'src/app/services/language.service';

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
  
  public currentLanguage: string = 'es';

   public textos: any = {
    es: {
      titulo: 'Portafolio',
      p1: `Si estás buscando conocer más sobre mi experiencia y habilidades en ingeniería mecánica e 
      ingeniería de software, estás en el lugar correcto. A continuación, te presento mi portafolio de trabajos, 
      donde podrás ver algunos de los proyectos en los que he trabajado. Desde el desarrollo de software y sitios 
      web hasta la ingeniería mecánica y el análisis de datos, cada proyecto muestra mi habilidad para trabajar en 
      diferentes ámbitos y entregar soluciones de alta calidad. Mi portafolio demuestra mi capacidad para trabajar 
      de manera efectiva en equipo, y cómo mi enfoque en la calidad, la eficiencia y la innovación me ha permitido 
      brindar soluciones personalizadas a mis clientes.`,   
    },
    en: {
      titulo: 'Portfolio',
      p1: ` If you are looking to learn more about my experience and skills in mechanical engineering and software engineering, you are in the right place. Below, I present my portfolio of works, where you can see some of the projects I have worked on. From software and web development to mechanical engineering and data analysis, each project showcases my ability to work in different fields and deliver high-quality solutions. My portfolio demonstrates my ability to work effectively in a team, and how my focus on quality, efficiency, and innovation has allowed me to provide personalized solutions to my clients.`,
    }
  }


  constructor(public dialog: MatDialog, breakpoinObserver: BreakpointObserver,
    private languageService: LanguageService) {

    breakpoinObserver.observe(['(max-width: 990px)']).subscribe(res =>{
        console.log(res.matches)
        this.isMobile = res.matches
        if(this.isMobile){
          this.colSize = 1;          
        }else{
          this.colSize = 4;         
        }
      })
  }

   ngOnInit(){
    this.languageService.languageChange.subscribe((language: string) => {
      this.currentLanguage = language;
    });

}}
