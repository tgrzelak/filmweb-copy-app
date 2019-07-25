import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieDto } from 'src/app/_models/movie-dto.model';
import { environment as env } from 'src/environments/environment';
import { MoviesListDto } from 'src/app/_models/movies-list-dto.model';

const MOVIES_ENDPOINT = '/movies';

@Injectable({
  providedIn: 'root',
})
export class MovieService {


  header = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(
    private _http: HttpClient
  ) { }



  getMovies(): Observable<MovieDto[]> {
    return this._http.get<MovieDto[]>(`${env.BASE_API_URL}${MOVIES_ENDPOINT}`);
  }

  postMovie(movie: MovieDto): Observable<MovieDto> {
    return this._http.post<MovieDto>(`${env.BASE_API_URL}${MOVIES_ENDPOINT}`, movie, {headers: this.header});
  }

  deleteMovie(title: string): Observable<MoviesListDto> {
    return this._http.delete<MoviesListDto>(`${env.BASE_API_URL}${MOVIES_ENDPOINT}/${title}`);
  }

}
