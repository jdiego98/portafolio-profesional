import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceViewComponent} from '../service-view/service-view.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { LanguageService } from 'src/app/services/language.service';



@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
})
export class ServiciosComponent {

  public cards: any = {
    en: [
      { title: 'Software Development', image: '', content: 'I offer software development services for companies and individuals. From planning to implementation, I can help you create customized solutions for your specific needs.' },
      { title: 'Web Development', image: '', content: 'Do you need a website for your company or personal project? I offer web development services, from design to programming and deployment. With my experience and knowledge, I can help you create a website that effectively represents you online.' },
      { title: 'Mechanical Engineering', image: '', content: 'As a mechanical engineer, I can offer you design and development services for machinery, equipment, and systems. From analysis and planning to construction and deployment, I can help you create effective and efficient solutions for your business.' },
      { title: 'Data Analysis', image: '', content: 'As a technology expert, I can offer you consulting services to help you find effective and efficient technological solutions for your company. From software selection to implementation and technical support, I can help you optimize your processes and maximize your efficiency.' },
      { title: 'Consulting', image: '', content: 'As a technology expert, I can offer you consulting services to help you find effective and efficient technological solutions for your company. From software selection to implementation and technical support, I can help you optimize your processes and maximize your efficiency.' },
      { title: 'Training', image: '', content: 'If you need to improve your technical skills, I can offer you training and coaching services in different areas. From software development to mechanical engineering and data analysis, I can help you improve your skills and knowledge so you can grow your business.' }
    ],
    es: [
      { title: 'Desarrollo de software', image: '', content: 'Ofrezco servicios de desarrollo de software para empresas y particulares. Desde la planificación hasta la implementación, puedo ayudarte a crear soluciones personalizadas para tus necesidades específicas.' },
      { title: 'Desarrollo web', image: '', content: '¿Necesitas una página web para tu empresa o proyecto personal? Ofrezco servicios de desarrollo web, desde el diseño hasta la programación y la puesta en marcha. Con mi experiencia y conocimientos, puedo ayudarte a crear una página web que te represente de manera efectiva en línea.' },
      { title: 'Ingeniería mecánica', image: '', content: 'Como ingeniero mecánico, puedo ofrecerte servicios de diseño y desarrollo de maquinarias, equipos y sistemas. Desde el análisis y la planificación hasta la construcción y la puesta en marcha, puedo ayudarte a crear soluciones efectivas y eficientes para tu negocio.' },
      { title: 'Análisis de datos', image: '', content: 'Como experto en tecnología, puedo ofrecerte servicios de consultoría para ayudarte a encontrar soluciones tecnológicas efectivas y eficientes para tu empresa. Desde la selección de software hasta la implementación y el soporte técnico, puedo ayudarte a optimizar tus procesos y maximizar tu eficiencia.' },
      { title: 'Consultoría', image: '', content: 'Como experto en tecnología, puedo ofrecerte servicios de consultoría para ayudarte a encontrar soluciones tecnológicas efectivas y eficientes para tu empresa. Desde la selección de software hasta la implementación y el soporte técnico, puedo ayudarte a optimizar tus procesos y maximizar tu eficiencia.' },
      { title: 'Capacitaciones', image: '', content: 'Si necesitas mejorar tus habilidades técnicas, puedo ofrecerte servicios de capacitación y entrenamiento en diferentes áreas. Desde el desarrollo de software hasta la ingeniería mecánica y el análisis de datos, puedo ayudarte a mejorar tus habilidades y conocimientos para que puedas hacer crecer tu negocio.' }
    ],
   
  };
  
  public isMobile: boolean = false;
  public colSize: number = 3;

  currentLanguage: string = 'es';

  public textos: any = {
    es: {
      titulo: 'Servicios',
      p1: `Como ingeniero en software e ingeniero mecánico, ofrezco una amplia 
      gama de servicios a mis clientes. Mi experiencia en ambas áreas me permite 
      ofrecer soluciones integrales y personalizadas para satisfacer las necesidades 
      de cada proyecto. Entre mis servicios se encuentran el desarrollo de software y 
      sitios web, la ingeniería mecánica y el análisis de datos. Además, ofrezco 
      consultoría y capacitaciones para garantizar que mis clientes obtengan el 
      máximo valor de mis servicios y puedan aplicarlos de manera efectiva en sus 
      propios proyectos. Con un enfoque en la calidad, la eficiencia y la innovación, 
      estoy comprometido a brindar soluciones de alta calidad que superen las 
      expectativas de mis clientes.`,
      button: 'Ver más'
    },
    en: {
      titulo: 'Services',
      p1: `As a software engineer and mechanical engineer, I offer a 
      wide range of services to my clients. My experience in both areas 
      allows me to offer comprehensive and personalized solutions to meet the 
      needs of each project. Among my services are software and web development, 
      mechanical engineering, and data analysis. In addition, I offer consulting 
      and training to ensure that my clients get the maximum value from my services 
      and can apply them effectively to their own projects. With a focus on quality, 
      efficiency, and innovation, I am committed to providing high-quality solutions 
      that exceed my clients' expectations.`,
      button: 'See more'
    }
  }

  constructor(public dialog: MatDialog, breakpoinObserver: BreakpointObserver,
    private languageService: LanguageService) {

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


  openDialog(service: any): void {
    const dialogRef = this.dialog.open(ServiceViewComponent, {
      data: {title: service.title, content: service.content},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}


