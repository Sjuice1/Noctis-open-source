import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailSliderItemComponent } from './thumbnail-slider-item.component';

describe('ThumbnailSliderItemComponent', () => {
  let component: ThumbnailSliderItemComponent;
  let fixture: ComponentFixture<ThumbnailSliderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThumbnailSliderItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThumbnailSliderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
