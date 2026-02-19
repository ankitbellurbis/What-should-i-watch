import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcReactorComponent } from './arc-reactor.component';

describe('ArcReactorComponent', () => {
  let component: ArcReactorComponent;
  let fixture: ComponentFixture<ArcReactorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArcReactorComponent]
    });
    fixture = TestBed.createComponent(ArcReactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
