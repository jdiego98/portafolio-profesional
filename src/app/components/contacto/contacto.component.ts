import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  contactForm: FormGroup;
  currentLanguage: string = 'es';

  
  public textos: any = {
    es: {
      titulo: 'Contacto',
      nombre: `Nombre`,
      apellido: 'Apellido',
      email: 'Correo Electrónico',
      asunto: 'Asunto',
      mensaje: 'Mensaje',
      button: 'Enviar',
    },
    en: {
      titulo: 'Contact',
      nombre: `Name`,
      apellido: 'Last Name',
      email: 'Email',
      asunto: 'Subject',
      mensaje: 'Message',
      button: 'Send',  
    }
  }

  constructor(private fb: FormBuilder,private languageService: LanguageService) {

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit(){
    this.languageService.languageChange.subscribe((language: string) => {
      this.currentLanguage = language;
    });
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }

}
