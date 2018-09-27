import { TestBed, inject } from '@angular/core/testing';

import { AccountPlatformService } from './account-platform.service';

describe('AccountPlatformService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountPlatformService]
    });
  });

  it('should be created', inject([AccountPlatformService], (service: AccountPlatformService) => {
    expect(service).toBeTruthy();
  }));
});
