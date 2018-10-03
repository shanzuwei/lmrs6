import { Component, OnInit, OnDestroy, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

import { DashboardhostDirective } from './../directive/dashboardhost.directive';
import { CardsComponentItem, CardsComponent } from './cards-component';
import { DmrsComponent } from './../dmrs/dmrs.component';
import { SmrsComponent } from './../smrs/smrs.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit, OnDestroy {

  @ViewChild(DashboardhostDirective) dashboardHost: DashboardhostDirective;
  // @ViewChild('dashboardhost', { read: ViewContainerRef }) dashboardHost;

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
  cardsComponentIndex = -1;
  cardsComponents = [
    new CardsComponentItem(DmrsComponent, { name: 'Bombasto', bio: 'Brave as they come' }),
    new CardsComponentItem(SmrsComponent, { name: 'Dr IQ', bio: 'Smart as they come' }),
  ];

  /** grid list height dynamic */
  gridListHeight = '590px';
  gridListCols = 2;

  constructor(private breakpointObserver: BreakpointObserver,
    private componentFactoryResolver: ComponentFactoryResolver) {

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
    this.loadComponent();
  }

  ngOnDestroy() {

  }

  loadComponent() {

    // retrieve component class -  DmrsComponent, {name: 'Bombasto', bio: 'Brave as they come'}
    this.cardsComponentIndex = (this.cardsComponentIndex + 1) % this.cardsComponents.length;
    console.log('cardsComponent: ', this.cardsComponents.length, ' ', this.cardsComponentIndex);
    const cardsComponentItem = this.cardsComponents[this.cardsComponentIndex];

    // retrieve component factory
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(cardsComponentItem.component);

    // create component, and insert into host
    const viewContainerRef = this.dashboardHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);

    // ??
    // (<CardsComponent>componentRef.instance).data = cardsComponent.data;

  }

  public setgridheight() {
    const styles = {
      'height': this.gridListHeight
    };

    // console.log('setgridheight : ', this.gridListHeight, ' cols: ', this.gridListCols);

    return styles;
  }

}
