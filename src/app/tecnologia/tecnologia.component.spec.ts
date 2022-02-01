import { TecnologiaComponent } from './tecnologia.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';



describe('TecnologiaComponent', () => {
  let component: TecnologiaComponent;
  let fixture: ComponentFixture<TecnologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnologiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
