import { Component, OnInit, Input } from '@angular/core';
import { ComponentInterface } from '../dynamic-loader/component-interface';

@Component({
  selector: 'app-dmrs',
  templateUrl: './dmrs.component.html',
  styleUrls: ['./dmrs.component.css']
})
export class DmrsComponent implements OnInit, ComponentInterface {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
