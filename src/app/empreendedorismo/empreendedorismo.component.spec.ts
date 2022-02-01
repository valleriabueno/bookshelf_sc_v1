import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpreendedorismoComponent } from './empreendedorismo.component';

describe('EmpreendedorismoComponent', () => {
  let component: EmpreendedorismoComponent;
  let fixture: ComponentFixture<EmpreendedorismoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpreendedorismoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpreendedorismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
