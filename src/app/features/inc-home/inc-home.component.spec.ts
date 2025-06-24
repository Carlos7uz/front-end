import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncHomeComponent } from './inc-home.component';

describe('IncHomeComponent', () => {
  let component: IncHomeComponent;
  let fixture: ComponentFixture<IncHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
