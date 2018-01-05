import { TestBed, inject } from '@angular/core/testing';

import { GenesService } from './genes.service';

describe('GenesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenesService]
    });
  });

  it('should be created', inject([GenesService], (service: GenesService) => {
    expect(service).toBeTruthy();
  }));
});
