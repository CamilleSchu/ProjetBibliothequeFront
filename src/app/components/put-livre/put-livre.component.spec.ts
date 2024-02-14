import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutLivreComponent } from './put-livre.component';

describe('PutLivreComponent', () => {
  let component: PutLivreComponent;
  let fixture: ComponentFixture<PutLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PutLivreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PutLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
