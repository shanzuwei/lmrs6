import { Component, OnInit, Input } from '@angular/core';
import { ComponentInterface } from '../../dynamic-loader/component-interface';

@Component({
  selector: 'app-smrs',
  templateUrl: './smrs.component.html',
  styleUrls: ['./smrs.component.css']
})
export class SmrsComponent implements OnInit, ComponentInterface {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
