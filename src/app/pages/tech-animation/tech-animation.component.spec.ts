import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechAnimationComponent } from './tech-animation.component';

describe('TechAnimationComponent', () => {
  let component: TechAnimationComponent;
  let fixture: ComponentFixture<TechAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechAnimationComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TechAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
