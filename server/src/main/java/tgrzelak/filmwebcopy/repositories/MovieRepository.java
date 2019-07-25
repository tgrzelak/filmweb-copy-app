package tgrzelak.filmwebcopy.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import tgrzelak.filmwebcopy.models.Movie;

import java.util.Optional;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

    @Query("select m from Movie  m where m.title = ?1")
    Optional<Movie> findMovieByTitle(String title);

    @Transactional
    @Modifying
    void deleteByTitle(String movieTitle);

}
