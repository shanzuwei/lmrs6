import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

import { ComponentItemsService } from '../service/component.items.service';
import { ComponentItem } from '../dynamic-loader/component-item';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 1, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 1 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  /** grid list height dynamic */
  gridListHeight = '590px';
  gridListCols = 2;

  // loader @input array
  componentItems: ComponentItem[];


  //
  constructor(private breakpointObserver: BreakpointObserver, private componentItemsService: ComponentItemsService) {

    breakpointObserver
      .observe([Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait])
      .subscribe(result => {
        if (result.matches) {
          this.gridListHeight = '500px';
          this.gridListCols = 1;
        } else {
          this.gridListHeight = '590px';
          this.gridListCols = 2;
        }
        // console.log('breakpointObserver breakpoints: ', result.breakpoints,
        //   '  match: ', result.matches, ' cols: ', this.gridListCols);
      });


  }

  //
  ngOnInit() {
    this.componentItems = this.componentItemsService.getComponentItems();
  }

  //
  public setgridheight() {
    const styles = {
      'height': this.gridListHeight
    };

    // console.log('setgridheight : ', this.gridListHeight, ' cols: ', this.gridListCols);

    return styles;
  }

}
