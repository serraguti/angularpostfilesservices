import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingfilesComponent } from './testingfiles.component';

describe('TestingfilesComponent', () => {
  let component: TestingfilesComponent;
  let fixture: ComponentFixture<TestingfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestingfilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
