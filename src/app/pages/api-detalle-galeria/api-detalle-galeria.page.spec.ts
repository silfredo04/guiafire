import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApiDetalleGaleriaPage } from './api-detalle-galeria.page';

describe('ApiDetalleGaleriaPage', () => {
  let component: ApiDetalleGaleriaPage;
  let fixture: ComponentFixture<ApiDetalleGaleriaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiDetalleGaleriaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApiDetalleGaleriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
