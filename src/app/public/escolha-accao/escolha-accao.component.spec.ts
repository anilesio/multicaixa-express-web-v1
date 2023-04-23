import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhaAccaoComponent } from './escolha-accao.component';

describe('EscolhaAccaoComponent', () => {
  let component: EscolhaAccaoComponent;
  let fixture: ComponentFixture<EscolhaAccaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolhaAccaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolhaAccaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
