import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncNewOptComponent } from './inc-new-opt.component';

describe('IncNewOptComponent', () => {
  let component: IncNewOptComponent;
  let fixture: ComponentFixture<IncNewOptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncNewOptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncNewOptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
