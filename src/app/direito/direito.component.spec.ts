import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireitoComponent } from './direito.component';

describe('DireitoComponent', () => {
  let component: DireitoComponent;
  let fixture: ComponentFixture<DireitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DireitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DireitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
