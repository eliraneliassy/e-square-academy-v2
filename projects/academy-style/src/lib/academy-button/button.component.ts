import {Component, Input, OnInit} from '@angular/core';
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'ac-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text = 'click';
  @Input('color') color : ThemePalette;
  @Input('disable') disable = false;
  constructor() { }

  ngOnInit(): void {
  }

}
