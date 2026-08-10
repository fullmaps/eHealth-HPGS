import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergyCard } from './allergy-card';

describe('AllergyCard', () => {
  let component: AllergyCard;
  let fixture: ComponentFixture<AllergyCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllergyCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllergyCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
