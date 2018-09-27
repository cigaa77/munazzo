import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPlatformComponent } from './account-platform.component';

describe('AccountPlatformComponent', () => {
  let component: AccountPlatformComponent;
  let fixture: ComponentFixture<AccountPlatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountPlatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
