import { ComponentFixture, TestBed } from '@angular/core/testing';

import { btnsComponent } from './btns.component';

describe('btnsComponent', () => {
  let component: btnsComponent;
  let fixture: ComponentFixture<btnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ btnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(btnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
