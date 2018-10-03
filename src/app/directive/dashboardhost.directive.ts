import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDashboardhost]'
})
export class DashboardhostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
