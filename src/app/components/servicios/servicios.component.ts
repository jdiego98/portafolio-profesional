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

  // public cards: any = {
  //   en: [
  //     { title: 'Software Development', image: '', content: 'I offer software development services for companies and individuals. From planning to implementation, I can help you create customized solutions for your specific needs.' },
  //     { title: 'Web Development', image: '', content: 'Do you need a website for your company or personal project? I offer web development services, from design to programming and deployment. With my experience and knowledge, I can help you create a website that effectively represents you online.' },
  //     { title: 'Mechanical Engineering', image: '', content: 'As a mechanical engineer, I can offer you design and development services for machinery, equipment, and systems. From analysis and planning to construction and deployment, I can help you create effective and efficient solutions for your business.' },
  //     { title: 'Data Analysis', image: '', content: 'As a technology expert, I can offer you consulting services to help you find effective and efficient technological solutions for your company. From software selection to implementation and technical support, I can help you optimize your processes and maximize your efficiency.' },
  //     { title: 'Consulting', image: '', content: 'As a technology expert, I can offer you consulting services to help you find effective and efficient technological solutions for your company. From software selection to implementation and technical support, I can help you optimize your processes and maximize your efficiency.' },
  //     { title: 'Training', image: '', content: 'If you need to improve your technical skills, I can offer you training and coaching services in different areas. From software development to mechanical engineering and data analysis, I can help you improve your skills and knowledge so you can grow your business.' }
  //   ],
  //   es: [
  //     { title: 'Desarrollo de software', image: '', content: 'Ofrezco servicios de desarrollo de software para empresas y particulares. Desde la planificación hasta la implementación, puedo ayudarte a crear soluciones personalizadas para tus necesidades específicas.' },
  //     { title: 'Desarrollo web', image: '', content: '¿Necesitas una página web para tu empresa o proyecto personal? Ofrezco servicios de desarrollo web, desde el diseño hasta la programación y la puesta en marcha. Con mi experiencia y conocimientos, puedo ayudarte a crear una página web que te represente de manera efectiva en línea.' },
  //     { title: 'Ingeniería mecánica', image: '', content: 'Como ingeniero mecánico, puedo ofrecerte servicios de diseño y desarrollo de maquinarias, equipos y sistemas. Desde el análisis y la planificación hasta la construcción y la puesta en marcha, puedo ayudarte a crear soluciones efectivas y eficientes para tu negocio.' },
  //     { title: 'Análisis de datos', image: '', content: 'Como experto en tecnología, puedo ofrecerte servicios de consultoría para ayudarte a encontrar soluciones tecnológicas efectivas y eficientes para tu empresa. Desde la selección de software hasta la implementación y el soporte técnico, puedo ayudarte a optimizar tus procesos y maximizar tu eficiencia.' },
  //     { title: 'Consultoría', image: '', content: 'Como experto en tecnología, puedo ofrecerte servicios de consultoría para ayudarte a encontrar soluciones tecnológicas efectivas y eficientes para tu empresa. Desde la selección de software hasta la implementación y el soporte técnico, puedo ayudarte a optimizar tus procesos y maximizar tu eficiencia.' },
  //     { title: 'Capacitaciones', image: '', content: 'Si necesitas mejorar tus habilidades técnicas, puedo ofrecerte servicios de capacitación y entrenamiento en diferentes áreas. Desde el desarrollo de software hasta la ingeniería mecánica y el análisis de datos, puedo ayudarte a mejorar tus habilidades y conocimientos para que puedas hacer crecer tu negocio.' }
  //   ],
   
  // };
  
  public cards: any = {
    en: [
      { title: 'Software Development', 
        intro: 'Do you need a custom software solution for your business or project? I offer personalized software development services to help you achieve your goals.', 
        content: `As a software developer, I can create a custom software solution tailored to your business or project needs. I use the latest technologies and development methodologies to ensure a high-quality product that meets your requirements. Whether you need a web or desktop application, a mobile app, or a custom software integration, I can help.`
      },
      { title: 'Web Development', 
        intro: 'Do you need a custom software solution for your business or project? I offer personalized software development services to help you achieve your goals.', 
        content: `As a web developer, I can build a modern, responsive website that meets your business or project needs. From custom WordPress sites to eCommerce solutions, I use the latest web development technologies to ensure a high-quality product that looks great on any device. I can also provide web hosting and maintenance services to keep your site running smoothly.`
      },
      { title: 'Mechanical Engineering', 
        intro: 'Do you need help with the design and development of mechanical systems or products? I offer professional mechanical engineering services to help you bring your ideas to life.', 
        content: `As a mechanical engineer, I can help you design and develop mechanical systems or products that meet your specific requirements. I use the latest engineering software and tools to ensure a high-quality product that is optimized for performance, reliability, and cost-effectiveness. From concept development to prototyping and testing, I can guide you through the entire product development process.`
      },
      { title: 'Data Analysis', 
        intro: 'Do you need help with data analysis and visualization for your business or project? I offer professional data analysis services to help you make informed decisions.', 
        content: `As a data analyst, I can help you analyze and visualize your data to uncover insights and make informed decisions. From data cleaning and preparation to statistical analysis and visualization, I use the latest data analysis tools and techniques to ensure accurate and meaningful results. Whether you need help with business intelligence, marketing analytics, or scientific research, I can help.`
      },
      { title: 'Consulting', 
        intro: ' Do you need help improving your business or project? I offer personalized consulting services to help you identify areas for improvement and develop effective solutions.', 
        content: `As a consultant, I can help you improve your business or project by identifying areas for improvement and developing effective solutions. I will work with you to understand your unique needs and create a personalized action plan that fits your situation. With my experience in project management, marketing strategies, and financial analysis, I can help you make informed decisions for the future of your business.`
      },
      { title: 'Training', 
        intro: `Do you need to improve your team's skills or acquire new knowledge? I offer personalized training services to help you achieve your learning objectives.`, 
        content: `As a training expert, I can help you improve your team's skills or acquire new knowledge. I will work with you to understand your learning objectives and create a personalized training plan for your team or yourself. With my experience in teaching skills such as programming, graphic design, and leadership, I can ensure that you receive quality training that is relevant to your learning objectives.`
      }
    ],
    es: [
      { title: 'Desarrollo de Software', 
        intro: ' ¿Necesitas una solución a medida para tu empresa? Ofrezco servicios de desarrollo de software personalizado para satisfacer tus necesidades únicas.', 
        content: `Soy un experto en el desarrollo de software y puedo ayudarte a crear soluciones personalizadas para satisfacer las necesidades únicas de tu empresa. Desde la planificación hasta la implementación, trabajaremos juntos para asegurarnos de que el software que desarrollamos para ti sea eficiente, escalable y fácil de usar. Con mi experiencia en lenguajes de programación como Java, Python y C++, puedo asegurarte que tu software estará en buenas manos.`
      },
      { title: 'Desarrollo Web', 
        intro: '¿Necesitas una presencia en línea para tu negocio o proyecto? Ofrezco servicios de desarrollo web personalizado para ayudarte a tener una página web moderna y funcional.', 
        content: `Con mi experiencia en el desarrollo web, puedo ayudarte a crear una presencia en línea que se adapte a tus necesidades. Desde la creación de una página web informativa hasta una tienda en línea completa, puedo ayudarte a crear una presencia en línea moderna y fácil de usar. Mi experiencia en lenguajes como HTML, CSS y JavaScript me permite crear páginas web atractivas y funcionales que sean fáciles de navegar para tus usuarios.`
      },
      { title: 'Ingeniería Mecánica', 
        intro: '¿Necesitas ayuda para diseñar o mejorar un producto mecánico? Ofrezco servicios de ingeniería mecánica personalizados para ayudarte a crear productos eficientes y de alta calidad.', 
        content: `Como ingeniero mecánico, puedo ayudarte a diseñar y mejorar productos mecánicos para asegurarte de que sean eficientes y de alta calidad. Desde la conceptualización hasta la producción, trabajaré contigo para garantizar que el producto final cumpla con tus necesidades. Con mi experiencia en el uso de software de diseño como AutoCAD y SolidWorks, puedo crear diseños precisos y detallados para cualquier proyecto mecánico.`
      },
      { title: 'Análisis de Datos', 
       intro: '¿Necesitas ayuda para entender tus datos y tomar decisiones basadas en ellos? Ofrezco servicios de análisis de datos personalizados para ayudarte a tomar decisiones informadas para tu negocio o proyecto.', 
       content: `Como experto en análisis de datos, puedo ayudarte a entender y utilizar tus datos para tomar decisiones informadas. Ya sea que necesites ayuda para visualizar tus datos o necesites análisis estadísticos más complejos, puedo ayudarte a tomar decisiones más informadas para tu negocio o proyecto. Con mi experiencia en herramientas de análisis de datos como R y Python, puedo trabajar contigo para crear modelos predictivos y análisis estadísticos personalizados.`
      },
      { title: 'Consultoría', 
        intro: `¿Necesitas ayuda para mejorar tu negocio o proyecto? Ofrezco servicios de consultoría personalizados para ayudarte a identificar áreas de mejora y desarrollar soluciones efectivas.`
       ,content: `Como consultor, puedo ayudarte a mejorar tu negocio o proyecto mediante la identificación de áreas de mejora y el desarrollo de soluciones efectivas. Trabajaré contigo para entender tus necesidades únicas y crear un plan de acción personalizado que se adapte a tu situación. Con mi experiencia en gestión de proyectos, estrategias de marketing y análisis financiero, puedo ayudarte a tomar decisiones informadas para el futuro de tu negocio.`
      },
      { title: 'Capacitaciones', 
        intro: `¿Necesitas mejorar las habilidades de tu equipo o adquirir nuevos conocimientos? Ofrezco servicios de capacitación personalizados para ayudarte a alcanzar tus objetivos de aprendizaje.`, 
        content: `Como experto en capacitación, puedo ayudarte a mejorar las habilidades de tu equipo o adquirir nuevos conocimientos. Trabajaré contigo para entender tus objetivos de aprendizaje y crear un plan de capacitación personalizado para tu equipo o para ti mismo. Con mi experiencia en la enseñanza de habilidades como programación, diseño gráfico y liderazgo, puedo asegurarte que recibirás una capacitación de calidad y útil para alcanzar tus objetivos.`
      }
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


