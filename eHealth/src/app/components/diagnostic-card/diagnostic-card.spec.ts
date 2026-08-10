import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticCard } from './diagnostic-card';

describe('DiagnosticCard', () => {
  let component: DiagnosticCard;
  let fixture: ComponentFixture<DiagnosticCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagnosticCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagnosticCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
