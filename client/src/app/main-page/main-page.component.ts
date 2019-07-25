import { Component, OnInit } from '@angular/core';
import { MovieService } from '../add-movie/_services/movie.service';
import { MoviesListDto } from '../_models/movies-list-dto.model';
import { MovieDto } from '../_models/movie-dto.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  movies: MovieDto[];

  constructor(
    private movieService: MovieService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe((movies: MovieDto[]) => {
      this.movies = movies;
    })
  }

  deleteMovie(title: string, id: number) {
    this.movieService.deleteMovie(title).subscribe(() => {
      this.movies.splice(id, 1);
      this.toastr.error(`Usunięto film: ${this.movies[id].title}`, `USUNIĘTO FILM !`, {
        timeOut: 5000
      })
    }
    );
  }

}
