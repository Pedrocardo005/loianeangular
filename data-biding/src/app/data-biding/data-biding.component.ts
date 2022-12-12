import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

  // Tipagem é opcional
  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'https://picsum.photos/200/300?grayscale';

  // Não precisa colocar um function antes
  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
