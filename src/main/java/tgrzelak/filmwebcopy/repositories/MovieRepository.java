package tgrzelak.filmwebcopy.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import tgrzelak.filmwebcopy.models.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

    @Transactional
    @Modifying
    void deleteByTitle(String movieTitle);

}
