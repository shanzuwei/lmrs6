import { Injectable } from '@angular/core';

import { ComponentItem } from '../dynamic-loader/component-item';
import { SmrsComponent } from '../smrs/smrs.component';
import { DmrsComponent } from '../dmrs/dmrs.component';
import { RegyyComponent } from '../regyy/regyy.component';
import { PlaybookComponent } from '../playbook/playbook.component';

@Injectable()
export class ComponentItemsService {
  getComponentItems() {
    return [
      new ComponentItem(SmrsComponent, {
        name: 'Bombasto',
        bio: 'Brave as they come'
      }),
      new ComponentItem(DmrsComponent, { name: 'Dr IQ', bio: 'Smart as they come' }),
      new ComponentItem(RegyyComponent, { name: 'BMO', bio: 'Bank of Montreal' }),
      new ComponentItem(PlaybookComponent, {
        name: 'RBC',
        bio: 'Royal Bank of Canada'
      })
    ];
  }
}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
