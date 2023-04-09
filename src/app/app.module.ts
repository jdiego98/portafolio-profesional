import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { HabilidadesBlandasComponent } from './components/habilidades-blandas/habilidades-blandas.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { FooterComponent } from './components/footer/footer.component';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { ServiceViewComponent } from './components/service-view/service-view.component';
import {MatInputModule} from '@angular/material/input';
import { NgxWhastappButtonModule } from 'ngx-whatsapp-button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    QuienSoyComponent,
    HabilidadesBlandasComponent,
    ServiciosComponent,
    PortafolioComponent,
    BlogComponent,
    ContactoComponent,
    FooterComponent,
    ServiceViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    NgxWhastappButtonModule,
    MatSlideToggleModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
