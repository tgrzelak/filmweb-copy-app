import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieService } from './add-movie/_services/movie.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DigitOnlyDirective } from './shared/_directives/digit-only.directive';
import { SearchSelectModule } from '@oasisdigital/angular-material-search-select';
import { NavbarComponent } from './navbar/navbar.component';
import { DurationConverter } from './shared/_pipes/duration-converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    MainPageComponent,
    DigitOnlyDirective,
    NavbarComponent,
    DurationConverter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SearchSelectModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      closeButton: true,
    })
  ],
  exports: [
    MatInputModule,
    DigitOnlyDirective
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
