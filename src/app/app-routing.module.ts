import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HabilidadesBlandasComponent } from './components/habilidades-blandas/habilidades-blandas.component';
import { HomeComponent } from './components/home/home.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { ServiciosComponent } from './components/servicios/servicios.component';


const routes: Routes = [
  {path: 'quien-soy', component: QuienSoyComponent},
  {path: 'habilidades-blandas', component: HabilidadesBlandasComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'portafolio', component: PortafolioComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
