import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`the filtered list of houses should be the complete list of 100 houses when the component starts`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.filteredHouses.length).toEqual(100);
  });

  it('the filtered list of houses should be the a list of 3 houses when the search value is Poland', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.searchValue = 'Poland';
    app.makeSearch();
    expect(app.filteredHouses.length).toEqual(3);
  });

  it('the filtered list of houses should be the a list of 0 houses when the search value is a symbol', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.searchValue = '%';
    app.makeSearch();
    expect(app.filteredHouses.length).toEqual(0);
  });
});
