import { Component, OnInit, Input } from '@angular/core';
import { ComponentInterface } from '../dynamic-loader/component-interface';

@Component({
  selector: 'app-regyy',
  templateUrl: './regyy.component.html',
  styleUrls: ['./regyy.component.css']
})
export class RegyyComponent implements OnInit, ComponentInterface {
  @Input()
  data: any;

  constructor() {}

  ngOnInit() {}
}
