import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-app-dialogos',
  templateUrl: './app-dialogos.component.html',
  styleUrls: ['./app-dialogos.component.scss']
})
export class AppDialogosComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public conteudo:string) { }

  ngOnInit(): void {
  }

}
