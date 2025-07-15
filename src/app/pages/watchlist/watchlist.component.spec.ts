import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WatchlistComponent } from './watchlist.component';
import { MovieCardComponent } from 'src/app/component/movie-card/movie-card.component'; // Adjust path
import { WatchlistButtonComponent } from 'src/app/component/watchlist-button/watchlist-button.component';

describe('WatchlistComponent', () => {
  let component: WatchlistComponent;
  let fixture: ComponentFixture<WatchlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WatchlistComponent, MovieCardComponent, WatchlistButtonComponent], // ✅ Add MovieCardComponent
    }).compileComponents();

    fixture = TestBed.createComponent(WatchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
