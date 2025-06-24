import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncOportunidadesComponent } from './inc-oportunidades.component';

describe('IncOportunidadesComponent', () => {
  let component: IncOportunidadesComponent;
  let fixture: ComponentFixture<IncOportunidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncOportunidadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncOportunidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
