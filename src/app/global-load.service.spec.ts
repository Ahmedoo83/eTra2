import { TestBed, inject } from '@angular/core/testing';

import { GlobalLoadService } from './global-load.service';

describe('GlobalLoadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalLoadService]
    });
  });

  it('should be created', inject([GlobalLoadService], (service: GlobalLoadService) => {
    expect(service).toBeTruthy();
  }));
});
