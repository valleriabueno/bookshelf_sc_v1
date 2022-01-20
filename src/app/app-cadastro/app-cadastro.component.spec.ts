import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCadastroComponent } from './app-cadastro.component';

describe('AppCadastroComponent', () => {
  let component: AppCadastroComponent;
  let fixture: ComponentFixture<AppCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
