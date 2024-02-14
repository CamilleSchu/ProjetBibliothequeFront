import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDomaineComponent } from './delete-domaine.component';

describe('DeleteDomaineComponent', () => {
  let component: DeleteDomaineComponent;
  let fixture: ComponentFixture<DeleteDomaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteDomaineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteDomaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
