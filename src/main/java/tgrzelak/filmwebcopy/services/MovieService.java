package tgrzelak.filmwebcopy.services;

import org.springframework.stereotype.Service;
import tgrzelak.filmwebcopy.models.Movie;
import tgrzelak.filmwebcopy.repositories.MovieRepository;

import java.util.List;

@Service
public class MovieService {

    private MovieRepository movieRepository;

    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    public List<Movie> getMovies() {
        return movieRepository.findAll();
    }
}
