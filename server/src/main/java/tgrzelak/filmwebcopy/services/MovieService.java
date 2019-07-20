package tgrzelak.filmwebcopy.services;

import org.springframework.stereotype.Service;
import tgrzelak.filmwebcopy.mappers.MovieMapper;
import tgrzelak.filmwebcopy.models.Movie;
import tgrzelak.filmwebcopy.models.dtos.MovieDto;
import tgrzelak.filmwebcopy.repositories.MovieRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MovieService {

    private MovieRepository movieRepository;
    private MovieMapper movieMapper;

    public MovieService(MovieRepository movieRepository, MovieMapper movieMapper) {
        this.movieRepository = movieRepository;
        this.movieMapper = movieMapper;
    }

    public List<Movie> getMovies() {
        return movieRepository.findAll();
    }

    public List<MovieDto> getMoviesDto() {
        return movieRepository
                .findAll()
                .stream()
                .map(movieMapper::map)
                .collect(Collectors.toList());
    }

    public void addMovie(MovieDto movieDto) {
        movieRepository.save(movieMapper.reverseMap(movieDto));
    }

    public void deleteMovie(String movieTitle) {
        movieRepository.deleteByTitle(movieTitle);
    }
}
