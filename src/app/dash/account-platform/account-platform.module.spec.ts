import { AccountPlatformModule } from './account-platform.module';

describe('AccountPlatformModule', () => {
  let accountPlatformModule: AccountPlatformModule;

  beforeEach(() => {
    accountPlatformModule = new AccountPlatformModule();
  });

  it('should create an instance', () => {
    expect(accountPlatformModule).toBeTruthy();
  });
});
