import { NgModule } from '@angular/core';
// Contém as principais diretivas que irá utilizar
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos.service';



@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  imports: [
    CommonModule
  ],
  // Quais coisas desses módulos você quer exportar a outro módulo
  exports: [
    CursosComponent
  ],
  // Serviços fornecedores
  providers: [CursosService]
})
export class CursosModule { }
