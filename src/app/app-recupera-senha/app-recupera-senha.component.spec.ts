import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRecuperaSenhaComponent } from './app-recupera-senha.component';

describe('AppRecuperaSenhaComponent', () => {
  let component: AppRecuperaSenhaComponent;
  let fixture: ComponentFixture<AppRecuperaSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppRecuperaSenhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRecuperaSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
