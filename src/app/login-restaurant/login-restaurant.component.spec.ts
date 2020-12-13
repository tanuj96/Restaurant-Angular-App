import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRestaurantComponent } from './login-restaurant.component';

describe('LoginRestaurantComponent', () => {
  let component: LoginRestaurantComponent;
  let fixture: ComponentFixture<LoginRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
