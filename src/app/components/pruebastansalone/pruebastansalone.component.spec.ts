import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebastansaloneComponent } from './pruebastansalone.component';

describe('PruebastansaloneComponent', () => {
  let component: PruebastansaloneComponent;
  let fixture: ComponentFixture<PruebastansaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PruebastansaloneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebastansaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
