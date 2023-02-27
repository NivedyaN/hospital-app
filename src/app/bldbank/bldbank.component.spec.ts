import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BldbankComponent } from './bldbank.component';

describe('BldbankComponent', () => {
  let component: BldbankComponent;
  let fixture: ComponentFixture<BldbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BldbankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BldbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
