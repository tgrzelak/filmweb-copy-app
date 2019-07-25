import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MovieDto } from '../_models/movie-dto.model';
import { MovieService } from './_services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  movieForm: FormGroup;
  movie: MovieDto = {
    title: null,
    engTitle: null,
    yearOfProduction: null,
    duration: null,
    description: null
  };

  constructor(
    private fb: FormBuilder,
    private movieService: MovieService,
    private toastr: ToastrService
  ) {}


  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.movieForm = this.fb.group({
      title: [''],
      engTitle: [''],
      yearOfProduction: [''],
      duration: [''],
      description: ['']
    });
  }

  createMovie() {
    this.movie.title = this.movieForm.value.title;
    this.movie.engTitle = this.movieForm.value.engTitle;
    this.movie.yearOfProduction = this.movieForm.value.yearOfProduction;
    this.movie.duration = this.movieForm.value.duration;
    this.movie.description = this.movieForm.value.description;

    this.movieService.postMovie(this.movie).subscribe((movie: MovieDto) => {
      this.toastr.success(`Film "${this.movie.title}" dodano do bazy danych`, `Dodano nowy film !`);
      this.movieForm.reset();
    });

  }

}
