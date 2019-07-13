package tgrzelak.filmwebcopy.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tgrzelak.filmwebcopy.models.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

}
