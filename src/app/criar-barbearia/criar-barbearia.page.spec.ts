import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CriarBarbeariaPage } from './criar-barbearia.page';

describe('CriarBarbeariaPage', () => {
  let component: CriarBarbeariaPage;
  let fixture: ComponentFixture<CriarBarbeariaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarBarbeariaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CriarBarbeariaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
