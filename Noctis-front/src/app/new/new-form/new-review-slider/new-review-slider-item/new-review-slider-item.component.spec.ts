import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReviewSliderItemComponent } from './new-review-slider-item.component';

describe('NewReviewSliderItemComponent', () => {
  let component: NewReviewSliderItemComponent;
  let fixture: ComponentFixture<NewReviewSliderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewReviewSliderItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewReviewSliderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
