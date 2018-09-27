import { TestBed, inject } from '@angular/core/testing';

import { IntegrationFilterService } from './integration-filter.service';

describe('IntegrationFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntegrationFilterService]
    });
  });

  it('should be created', inject([IntegrationFilterService], (service: IntegrationFilterService) => {
    expect(service).toBeTruthy();
  }));
});
