import { TestBed, inject } from '@angular/core/testing';

import { PlatformSettingsService } from './platform-settings.service';

describe('PlatformSettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlatformSettingsService]
    });
  });

  it('should be created', inject([PlatformSettingsService], (service: PlatformSettingsService) => {
    expect(service).toBeTruthy();
  }));
});
