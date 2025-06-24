import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncProfileComponent } from './inc-profile.component';

describe('IncProfileComponent', () => {
  let component: IncProfileComponent;
  let fixture: ComponentFixture<IncProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
