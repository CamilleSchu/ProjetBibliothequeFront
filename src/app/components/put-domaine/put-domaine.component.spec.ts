import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutDomaineComponent } from './put-domaine.component';

describe('PutDomaineComponent', () => {
  let component: PutDomaineComponent;
  let fixture: ComponentFixture<PutDomaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PutDomaineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PutDomaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
