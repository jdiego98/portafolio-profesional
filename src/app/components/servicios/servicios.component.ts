import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceViewComponent} from '../service-view/service-view.component';



@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
})
export class ServiciosComponent {

  cards = [
    { title: 'Desarrollo de software', image: '', content: 'Ofrezco servicios de desarrollo de software para empresas y particulares. Desde la planificación hasta la implementación, puedo ayudarte a crear soluciones personalizadas para tus necesidades específicas.' },
    { title: 'Desarrollo web', image: '', content: '¿Necesitas una página web para tu empresa o proyecto personal? Ofrezco servicios de desarrollo web, desde el diseño hasta la programación y la puesta en marcha. Con mi experiencia y conocimientos, puedo ayudarte a crear una página web que te represente de manera efectiva en línea.' },
    { title: 'Ingeniería mecánica', image: '', content: 'Como ingeniero mecánico, puedo ofrecerte servicios de diseño y desarrollo de maquinarias, equipos y sistemas. Desde el análisis y la planificación hasta la construcción y la puesta en marcha, puedo ayudarte a crear soluciones efectivas y eficientes para tu negocio.' },
    { title: 'Análisis de datos', image: '', content: 'Como experto en tecnología, puedo ofrecerte servicios de consultoría para ayudarte a encontrar soluciones tecnológicas efectivas y eficientes para tu empresa. Desde la selección de software hasta la implementación y el soporte técnico, puedo ayudarte a optimizar tus procesos y maximizar tu eficiencia.' },
    { title: 'Consultoría en tecnología', image: '', content: 'Como experto en tecnología, puedo ofrecerte servicios de consultoría para ayudarte a encontrar soluciones tecnológicas efectivas y eficientes para tu empresa. Desde la selección de software hasta la implementación y el soporte técnico, puedo ayudarte a optimizar tus procesos y maximizar tu eficiencia.' },
    { title: 'Capacitación y entrenamiento', image: '', content: 'Si necesitas mejorar tus habilidades técnicas, puedo ofrecerte servicios de capacitación y entrenamiento en diferentes áreas. Desde el desarrollo de software hasta la ingeniería mecánica y el análisis de datos, puedo ayudarte a mejorar tus habilidades y conocimientos para que puedas hacer crecer tu negocio.' },
  ];

  constructor(public dialog: MatDialog) {}

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


