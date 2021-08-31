import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrrentTrainingComponent } from './currrent-training.component';

describe('CurrrentTrainingComponent', () => {
  let component: CurrrentTrainingComponent;
  let fixture: ComponentFixture<CurrrentTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrrentTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrrentTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
