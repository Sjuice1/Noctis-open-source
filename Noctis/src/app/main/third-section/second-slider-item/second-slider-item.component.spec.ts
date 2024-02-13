import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSliderItemComponent } from './second-slider-item.component';

describe('SecondSliderItemComponent', () => {
  let component: SecondSliderItemComponent;
  let fixture: ComponentFixture<SecondSliderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondSliderItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondSliderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
