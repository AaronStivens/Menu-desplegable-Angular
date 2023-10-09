import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //Modulo de animaciones
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';//Modulo de iconos font awesome
import { faFilm } from '@fortawesome/free-solid-svg-icons';//Modulo de iconos Fafilm
import { faFish } from '@fortawesome/free-solid-svg-icons';//Modulo de iconos Fafilm
import {MatToolbarModule} from '@angular/material/toolbar';//Modulo de barra de herramientas
import 'hammerjs'; //Modulo hammerjs para interacciones tactiles
import { FlexLayoutModule } from '@angular/flex-layout';//modulo que simplifica la creacion de animaciones mas flexibles
import {MatIconModule} from '@angular/material/icon';//Modulo de iconos de angular
import {MatRippleModule} from '@angular/material/core';//Modulo que brinda animacion a botones al hacer click sobre ellos
import { MatMenuModule } from '@angular/material/menu';//Modulo para menus desplegables
import { MatSidenavModule } from '@angular/material/sidenav';//Modulo para crear menus deslizantes
import { MatListModule } from '@angular/material/list';//Modulos para crear listas
import {matDialogAnimations, MatDialogModule} from '@angular/material/dialog';//Modulo para cuadro de dialogos

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    MatRippleModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(library: FaIconLibrary) {//Importacion de los iconos Fa y Fish
    library.addIcons(faFilm,faFish); 
  }
 
 }
