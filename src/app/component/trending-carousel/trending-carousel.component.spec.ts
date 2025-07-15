import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrendingCarouselComponent } from './trending-carousel.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('TrendingCarouselComponent', () => {
  let component: TrendingCarouselComponent;
  let fixture: ComponentFixture<TrendingCarouselComponent>;
  let router: Router;

  const mockMovies = [
    {
      id: 1,
      title: 'Movie One',
      backdrop_path: '/test.jpg',
      overview: 'Overview...',
      vote_average: 8.5
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendingCarouselComponent],
      imports: [RouterTestingModule]
    });

    fixture = TestBed.createComponent(TrendingCarouselComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    component.movies = mockMovies;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to detail on button click', () => {
    spyOn(router, 'navigate');
    const btn = fixture.debugElement.query(By.css('button'));
    btn.triggerEventHandler('click', null);
    expect(router.navigate).toHaveBeenCalledWith(['/movie', 1]);
  });

  it('should return backdrop URL', () => {
    const url = component.backdropUrl(mockMovies[0]);
    expect(url).toContain('/test.jpg');
  });
});
