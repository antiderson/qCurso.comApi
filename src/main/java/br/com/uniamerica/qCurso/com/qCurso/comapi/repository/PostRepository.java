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

    @Query("from Post where stack = :stack")
    public List<Post> findByCategoria(@Param("stack") Stack stack);

    @Query("from Post where categoria = :categoria")
    public List<Post> findByCategoria(@Param("categoria") Categoria categoria);
}