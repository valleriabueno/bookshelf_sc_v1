import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDialogosComponent } from './app-dialogos.component';

describe('AppDialogosComponent', () => {
  let component: AppDialogosComponent;
  let fixture: ComponentFixture<AppDialogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDialogosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDialogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
