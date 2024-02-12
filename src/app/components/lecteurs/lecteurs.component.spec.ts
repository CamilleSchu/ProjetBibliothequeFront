import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecteursComponent } from './lecteurs.component';

describe('LecteursComponent', () => {
  let component: LecteursComponent;
  let fixture: ComponentFixture<LecteursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LecteursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LecteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
