import { TestBed, inject } from '@angular/core/testing';

import { PirateBayService } from './pirate-bay.service';

describe('PirateBayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PirateBayService]
    });
  });

  it('should be created', inject([PirateBayService], (service: PirateBayService) => {
    expect(service).toBeTruthy();
  }));
});
