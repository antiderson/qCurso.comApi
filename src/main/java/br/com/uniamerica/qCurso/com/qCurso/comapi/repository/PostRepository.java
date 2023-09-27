package br.com.uniamerica.qCurso.com.qCurso.comapi.repository;

import br.com.uniamerica.qCurso.com.qCurso.comapi.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

    @Query(value = "select * from qcurso.tb_posts where id = :id", nativeQuery = true)
    public Optional<Post> findById(@Param("id") final Long id);

    @Query("SELECT post FROM Post post WHERE post.ativo = true")
    public List<Post> findByPostsAtivos();

    @Query("from Post where descricao = :descricao")
    public List<Post> findByDescricao(@Param("descricao") String descricao);

    @Query("from Post where categoria = :categoria")
    public List<Post> findByCategoria(@Param("categoria") Categoria categoria);

    @Query("from Post where statusPost = :statusPost")
    public List<Post> findByStatusPost(@Param("statusPost") StatusPost statusPost);

    @Query("from Post where tipo = :tipo")
    public List<Post> findByTipo(@Param("tipo") Tipo tipo);
}