package tgrzelak.filmwebcopy.controllers;

import org.springframework.web.bind.annotation.*;
import tgrzelak.filmwebcopy.models.Movie;
import tgrzelak.filmwebcopy.models.dtos.MovieDto;
import tgrzelak.filmwebcopy.services.MovieService;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class MovieController {

    private MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping("/movies")
    public List<Movie> getMovies() {
        return movieService.getMovies();
    }

    @GetMapping("/dto/movies")
    public List<MovieDto> getMoviesDto(){
        return movieService.getMoviesDto();
    }

    @PostMapping("/dto/movies")
    public void addMovie(@RequestBody MovieDto movieDto) {
         movieService.addMovie(movieDto);
    }

    @DeleteMapping("/dto/movies/{movieTitle}")
    public void deleteMovie(@PathVariable String movieTitle) {
        movieService.deleteMovie(movieTitle);
    }


}
