import { Component, OnInit, Input } from '@angular/core';
import { AdComponent } from './../dynamic-loader/ad.component';

@Component({
  selector: 'app-playbook',
  templateUrl: './playbook.component.html',
  styleUrls: ['./playbook.component.css']
})
export class PlaybookComponent implements OnInit, AdComponent {
  @Input() data: any;

  constructor() {}

  ngOnInit() {}
}
