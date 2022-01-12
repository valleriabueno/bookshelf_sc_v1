import { GenerosService } from './../service/generos.service';
import { Generos } from './../modelos/generos';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  livrosGeneros: Observable <Generos[]>;
  visaoColunas=['_idGenero','nomeGenero','decimalGenero'];

  constructor(private generosService: GenerosService) {
    this.livrosGeneros = generosService.listagemGeneros();
  }

  ngOnInit(): void {
  }
}
