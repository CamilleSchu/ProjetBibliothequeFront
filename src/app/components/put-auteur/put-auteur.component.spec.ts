import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutAuteurComponent } from './put-auteur.component';

describe('PutAuteurComponent', () => {
  let component: PutAuteurComponent;
  let fixture: ComponentFixture<PutAuteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PutAuteurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PutAuteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
