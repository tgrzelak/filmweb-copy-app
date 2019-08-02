import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MovieDto } from '../_models/movie-dto.model';
import { MovieService } from './_services/movie.service';
import { DataSource, OptionEntry } from '@oasisdigital/angular-material-search-select';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Country } from '../_models/country.model';
import { map } from 'rxjs/operators';

const apiURL = 'http://localhost:3000/countries';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})

export class AddMovieComponent implements OnInit {

  dataSource: DataSource;

  countries = new FormControl(null, [Validators.required]);

  movieForm: FormGroup;
  movie: MovieDto = {
    title: null,
    engTitle: null,
    yearOfProduction: null,
    duration: null,
    description: null,
    poster: null
  };

  constructor(
    private fb: FormBuilder,
    private movieService: MovieService,
    private toastr: ToastrService,
    http: HttpClient
  ) {

    this.movieForm = this.fb.group({
      title: [''],
      engTitle: [''],
      yearOfProduction: [''],
      duration: [''],
      description: [''],
      poster: ['']
    });

    this.dataSource = {
      displayValue(value: any): Observable<OptionEntry | null> {
        if (typeof value === 'string') {
          value = parseInt(value, 10);
        }
        if (typeof value !== 'number') {
          return of(null);
        }

        return http.get<Country>(apiURL + '/' + value).pipe(
          map(e => ({
            value: e.name,
            display: `${e.name}`,
            details: {}
          }))
        );
      },
      search(term: string): Observable<OptionEntry[]> {
        return http.get<Country[]>(apiURL, {
          params: {
            q: term || '',
            _sort: 'name'
          }
        }).pipe(
          map(list => list.map(e => ({
            value: e.name,
            display: `${e.name}`,
            details: {}
          }))));
      }
    };
  }


  ngOnInit() {
    // this.createForm();
  }

  // createForm() {
  //   this.movieForm = this.fb.group({
  //     title: [''],
  //     engTitle: [''],
  //     yearOfProduction: [''],
  //     duration: [''],
  //     description: ['']
  //   });
  // }

  createMovie() {
    this.movie.title = this.movieForm.value.title;
    this.movie.engTitle = this.movieForm.value.engTitle;
    this.movie.yearOfProduction = this.movieForm.value.yearOfProduction;
    this.movie.duration = this.movieForm.value.duration;
    this.movie.description = this.movieForm.value.description;
    this.movie.poster = this.movieForm.value.poster;

    this.movieService.postMovie(this.movie).subscribe((movie: MovieDto) => {
      this.toastr.success(`Film "${this.movie.title}" dodano do bazy danych`, `DODANO NOWY FILM !`);
      this.movieForm.reset();
    });

  }

}
