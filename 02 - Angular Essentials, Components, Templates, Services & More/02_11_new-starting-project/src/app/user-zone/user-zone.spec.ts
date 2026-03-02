import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserZoneComponent } from './user-zone';

describe('UserZoneComponent', () => {
  let component: UserZoneComponent;
  let fixture: ComponentFixture<UserZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserZoneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
