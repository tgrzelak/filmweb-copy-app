package tgrzelak.filmwebcopy.models.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import tgrzelak.filmwebcopy.models.*;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MovieDto {

    private String title;
    private String engTitle;
    private int yearOfProduction;
    private int duration;
    private String description;
    private Set<Poster> posters;
    private Set<Trailer> trailers;
    private Set<Genre> genres;
    private Set<Country> countries;
    private Set<Actor> actors;

}
