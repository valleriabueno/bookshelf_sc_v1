import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LerMaisComponent } from './ler-mais.component';

describe('LerMaisComponent', () => {
  let component: LerMaisComponent;
  let fixture: ComponentFixture<LerMaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LerMaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LerMaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
