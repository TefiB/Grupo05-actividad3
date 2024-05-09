import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinciasListarComponent } from './provincias-listar.component';

describe('ProvinciasListarComponent', () => {
  let component: ProvinciasListarComponent;
  let fixture: ComponentFixture<ProvinciasListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvinciasListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvinciasListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
