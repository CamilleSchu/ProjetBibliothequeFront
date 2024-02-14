import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAuteurComponent } from './detail-auteur.component';

describe('DetailAuteurComponent', () => {
  let component: DetailAuteurComponent;
  let fixture: ComponentFixture<DetailAuteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailAuteurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailAuteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
