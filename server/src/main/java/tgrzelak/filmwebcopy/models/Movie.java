package tgrzelak.filmwebcopy.models;

import lombok.AllArgsConstructor;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "movie")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String engTitle;
    private int yearOfProduction;
    private int duration;
    private String description;

    @OneToMany
    private Set<Poster> posters;

    @OneToMany
    private Set<Trailer> trailers;

    @ManyToMany
    private Set<Genre> genres;

    @ManyToMany
    private Set<Country> countries;

    @ManyToMany
    private Set<Actor> actors;
}
