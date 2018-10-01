import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

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

  constructor(private breakpointObserver: BreakpointObserver) {

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
        console.log('breakpointObserver breakpoints: ', result.breakpoints,
          '  match: ', result.matches, ' cols: ', this.gridListCols);
      });


  }
  ngOnInit() {
    // console.log('gridListHeight1 : ', this.gridListHeight1);
    // console.log('gridListHeight : ', this.gridListHeight);

  }

  public setgridheight() {
    const styles = {
      'height': this.gridListHeight
    };

    console.log('setgridheight : ', this.gridListHeight, ' cols: ', this.gridListCols);

    return styles;
  }

}
