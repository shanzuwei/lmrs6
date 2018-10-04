import { Injectable } from '@angular/core';

import { AdItem } from './../dynamic-loader/ad-item';
import { SmrsComponent } from './../smrs/smrs.component';
import { DmrsComponent } from './../dmrs/dmrs.component';
import { RegyyComponent } from './../regyy/regyy.component';
import { PlaybookComponent } from './../playbook/playbook.component';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(SmrsComponent, {
        name: 'Bombasto',
        bio: 'Brave as they come'
      }),
      new AdItem(DmrsComponent, { name: 'Dr IQ', bio: 'Smart as they come' }),
      new AdItem(RegyyComponent, { name: 'BMO', bio: 'Bank of Montreal' }),
      new AdItem(PlaybookComponent, {
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
