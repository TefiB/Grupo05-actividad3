import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinciasAdministrarComponent } from './provincias-administrar.component';

describe('ProvinciasAdministrarComponent', () => {
  let component: ProvinciasAdministrarComponent;
  let fixture: ComponentFixture<ProvinciasAdministrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvinciasAdministrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvinciasAdministrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
