import { NgModule } from '@angular/core';
// Prepara para ser usada em um brownser.
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
// Não precisa do .ts
import { MeuPrimeiroComponent} from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
// Decorato que indica que é um módulo
@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  // Providers contém os serviços que os módulos em declarations
  //irão usurfruir.
  providers: [],
  // Só no raiz tem o bootstrap. Quando for executada a aplicação, irá chamar essa
  bootstrap: [AppComponent]
})
export class AppModule { }
