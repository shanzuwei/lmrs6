import { Component, OnInit, Input } from '@angular/core';
import { AdComponent } from './../dynamic-loader/ad.component';

@Component({
  selector: 'app-smrs',
  templateUrl: './smrs.component.html',
  styleUrls: ['./smrs.component.css']
})
export class SmrsComponent implements OnInit, AdComponent {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
