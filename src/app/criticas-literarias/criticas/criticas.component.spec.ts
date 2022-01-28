import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticasComponent } from './criticas.component';

describe('CriticasComponent', () => {
  let component: CriticasComponent;
  let fixture: ComponentFixture<CriticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriticasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
