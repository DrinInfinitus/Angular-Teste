import { InputOutputPropertySet } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.css']
})
export class DespesasComponent implements OnInit{

  constructor(
    private route: Router
   ) {}

  ngOnInit(): void {
  }

  onclick():void {
    this.route.navigate(['login']);
  }

}
