import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApiDetalleCantantesPage } from './api-detalle-cantantes.page';

describe('ApiDetalleCantantesPage', () => {
  let component: ApiDetalleCantantesPage;
  let fixture: ComponentFixture<ApiDetalleCantantesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiDetalleCantantesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApiDetalleCantantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
