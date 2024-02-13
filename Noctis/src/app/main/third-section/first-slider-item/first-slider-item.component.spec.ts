import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSliderItemComponent } from './first-slider-item.component';

describe('FirstSliderItemComponent', () => {
  let component: FirstSliderItemComponent;
  let fixture: ComponentFixture<FirstSliderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstSliderItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstSliderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
