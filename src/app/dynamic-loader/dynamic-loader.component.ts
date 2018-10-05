import { Component, OnInit, OnDestroy, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ComponentItem } from './component-item';
import { HostDirective } from '../directive/host-directive';
import { ComponentInterface } from './component-interface';

@Component({
  selector: 'app-dynamic-loader',
  templateUrl: './dynamic-loader.component.html',
  styleUrls: ['./dynamic-loader.component.css']
})
export class DynamicLoaderComponent implements OnInit, OnDestroy {

  @Input() componentItems: ComponentItem[];  // component list
  @Input() componentItemsIndex: number;

  currentAdIndex: number;
  @ViewChild(HostDirective) adHost: HostDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.currentAdIndex = this.componentItemsIndex - 1;
    this.loadComponent();
    // this.getcomponentItems();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.componentItems.length;

    const adItem = this.componentItems[this.currentAdIndex];
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<ComponentInterface>componentRef.instance).data = adItem.data;
  }

  getcomponentItems() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

}
