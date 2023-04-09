import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-habilidades-blandas',
  templateUrl: './habilidades-blandas.component.html',
  styleUrls: ['./habilidades-blandas.component.css']
})
export class HabilidadesBlandasComponent {

  cards = [
    { title: 'Creatividad', content: 'Soy una persona altamente creativa, capaz de generar ideas innovadoras y soluciones originales a los desafíos. He utilizado mi creatividad en proyectos de diseño, marketing y publicidad, y estoy constantemente buscando formas de pensar fuera de la caja para mejorar procesos y productos. Además, tengo la habilidad de comunicar mis ideas con claridad y persuasión.' },
    { title: 'Liderazgo', content: 'Como líder, he demostrado mi habilidad para guiar equipos hacia el éxito. Soy un líder compasivo y empático, que valora las perspectivas y necesidades de cada miembro del equipo. He liderado equipos en proyectos de gran envergadura, y he coordinado eficazmente tareas, recursos y plazos. Además, estoy comprometido con el desarrollo profesional de mi equipo y siempre busco oportunidades para motivarlos y capacitarlos.' },
    { title: 'Pensamiento Crítico', content: 'Soy una persona analítica y rigurosa, capaz de evaluar información y situaciones complejas desde múltiples perspectivas. He utilizado mi pensamiento crítico en proyectos que involucran análisis de datos, estrategias de negocios y toma de decisiones importantes. Siempre valoro la evidencia y la lógica en mi toma de decisiones, y busco oportunidades para aprender y crecer en mi pensamiento crítico. Además, soy capaz de comunicar mis análisis de manera clara y efectiva.' },
  ];

  public isMobile: boolean = false;
  public colSize: number = 3;
  
  constructor(public dialog: MatDialog, breakpoinObserver: BreakpointObserver) {

    // breakpoinObserver.observe([Breakpoints.Handset]).subscribe(res =>{

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
}
