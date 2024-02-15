import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReviewSliderComponent } from './new-review-slider.component';

describe('NewReviewSliderComponent', () => {
  let component: NewReviewSliderComponent;
  let fixture: ComponentFixture<NewReviewSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewReviewSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewReviewSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
