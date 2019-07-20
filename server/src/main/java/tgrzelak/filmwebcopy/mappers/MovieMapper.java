package tgrzelak.filmwebcopy.mappers;

import org.springframework.stereotype.Component;
import tgrzelak.filmwebcopy.commons.mapper.Mapper;
import tgrzelak.filmwebcopy.models.*;
import tgrzelak.filmwebcopy.models.dtos.MovieDto;

@Component
public class MovieMapper implements Mapper<Movie, MovieDto> {

    @Override
    public MovieDto map(Movie f) {
        return MovieDto
                .builder()
                .title(f.getTitle())
                .engTitle(f.getEngTitle())
                .yearOfProduction(f.getYearOfProduction())
                .duration(f.getDuration())
                .description(f.getDescription())
                .posters(f.getPosters())
                .trailers(f.getTrailers())
                .genres(f.getGenres())
                .countries(f.getCountries())
                .actors(f.getActors())
                .build();
    }

    @Override
    public Movie reverseMap(MovieDto t) {
        return Movie
                .builder()
                .title(t.getTitle())
                .engTitle(t.getEngTitle())
                .yearOfProduction(t.getYearOfProduction())
                .duration(t.getDuration())
                .description(t.getDescription())
                .posters(t.getPosters())
                .trailers(t.getTrailers())
                .genres(t.getGenres())
                .countries(t.getCountries())
                .actors(t.getActors())
                .build();

    }
}
