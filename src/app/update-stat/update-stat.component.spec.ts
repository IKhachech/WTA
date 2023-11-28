import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStatComponent } from './update-stat.component';

describe('UpdateStatComponent', () => {
  let component: UpdateStatComponent;
  let fixture: ComponentFixture<UpdateStatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateStatComponent]
    });
    fixture = TestBed.createComponent(UpdateStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
