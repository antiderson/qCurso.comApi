package br.com.uniamerica.qCurso.com.qCurso.comapi.repository;

import br.com.uniamerica.qCurso.com.qCurso.comapi.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {

    @Query(value = "select * from qcurso.tb_question where id = :id", nativeQuery = true)
    public Optional<Question> findById(@Param("id") final Long id);

    @Query("SELECT question FROM Question question WHERE question.ativo = true")
    public List<Question> findByQuestionAtivos();


    @Query("from Question where stack = :stack")
    public List<Question> findByCategoria(@Param("stack") Stack stack);

}