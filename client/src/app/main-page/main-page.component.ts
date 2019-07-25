import { Component, OnInit } from '@angular/core';
import { MovieService } from '../add-movie/_services/movie.service';
import { MoviesListDto } from '../_models/movies-list-dto.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  movies: MoviesListDto;

  constructor(
    private movieSerice: MovieService
  ) { }

  ngOnInit() {
    this.movieSerice.getMovies().subscribe((movies: MoviesListDto) => {
      this.movies = movies;
    })
  }

}
