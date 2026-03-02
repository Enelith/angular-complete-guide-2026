import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSignalComponent } from './user-signal';

describe('UserSignalComponent', () => {
  let component: UserSignalComponent;
  let fixture: ComponentFixture<UserSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSignalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
