import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAuteurComponent } from './delete-auteur.component';

describe('DeleteAuteurComponent', () => {
  let component: DeleteAuteurComponent;
  let fixture: ComponentFixture<DeleteAuteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteAuteurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteAuteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
