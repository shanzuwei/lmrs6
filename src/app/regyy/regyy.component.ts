import { Component, OnInit, Input } from '@angular/core';
import { AdComponent } from './../dynamic-loader/ad.component';

@Component({
  selector: 'app-regyy',
  templateUrl: './regyy.component.html',
  styleUrls: ['./regyy.component.css']
})
export class RegyyComponent implements OnInit, AdComponent {
  @Input()
  data: any;

  constructor() {}

  ngOnInit() {}
}
