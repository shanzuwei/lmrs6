import { Component, OnInit, Input } from '@angular/core';
import { ComponentInterface } from '../../dynamic-loader/component-interface';

@Component({
  selector: 'app-playbook',
  templateUrl: './playbook.component.html',
  styleUrls: ['./playbook.component.css']
})
export class PlaybookComponent implements OnInit, ComponentInterface {
  @Input() data: any;

  constructor() {}

  ngOnInit() {}
}
