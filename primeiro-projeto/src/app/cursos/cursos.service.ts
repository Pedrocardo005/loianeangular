import { Injectable } from '@angular/core';
// Significa que irá utilizar a injeção de dependência
@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos() {
    return ['Java', 'Ext JS', 'Angular'];
  }
}
