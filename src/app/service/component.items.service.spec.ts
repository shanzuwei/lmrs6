import { TestBed, inject } from '@angular/core/testing';

import { ComponentItemsService } from './component.items.service';

describe('ComponentItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentItemsService]
    });
  });

  it('should be created', inject([ComponentItemsService], (service: ComponentItemsService) => {
    expect(service).toBeTruthy();
  }));
});
