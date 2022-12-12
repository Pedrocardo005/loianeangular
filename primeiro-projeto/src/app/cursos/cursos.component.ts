import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[];

  // Cria automaticamente ao colocar como argumento
  constructor(private cursoService: CursosService) { 
    this.nomePortal = 'http://loaiane.training';

    // var servico = new CursosService();
    
    this.cursos = this.cursoService.getCursos();
  }

  ngOnInit(): void {
  }

}
