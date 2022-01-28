import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-ler-mais',
  templateUrl: './ler-mais.component.html',
  styleUrls: ['./ler-mais.component.scss']
})
export class LerMaisComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
  ) { }

  ngOnInit(): void {
  }

}
