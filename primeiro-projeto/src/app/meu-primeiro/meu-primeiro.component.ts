// Relativo ao pacote em node_modules
import {Component} from '@angular/core';

// Indica que é um componente. Metadados passados ficam nas chaves
@Component({
    selector: 'meu-primeiro-component',
    // Crase é do ecma6
    // É utilizado o template para quando tem no máximo 3 parágrafos
    template: `<p>Meu primeiro component com Angular!</p>`,
})
// Utiliza cammelcase para escrita da classe.
// Sem o export ela só é vista aqui
export class MeuPrimeiroComponent {}