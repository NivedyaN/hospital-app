import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FecilityComponent } from './fecility.component';

describe('FecilityComponent', () => {
  let component: FecilityComponent;
  let fixture: ComponentFixture<FecilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FecilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FecilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
