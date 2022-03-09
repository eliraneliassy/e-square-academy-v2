import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tiles:string[] = [];
  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i < 8; i++) {
      this.tiles.push(''+i);
    }
    const num = 900999;
    const s:string = ''+num;
    const num1:number = +s;

  }

}
