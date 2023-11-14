import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParStatComponent } from './recherche-par-stat.component';

describe('RechercheParStatComponent', () => {
  let component: RechercheParStatComponent;
  let fixture: ComponentFixture<RechercheParStatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercheParStatComponent]
    });
    fixture = TestBed.createComponent(RechercheParStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
