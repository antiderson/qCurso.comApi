package br.com.uniamerica.qCurso.com.qCurso.comapi.repository;

import br.com.uniamerica.qCurso.com.qCurso.comapi.entity.Genero;
import br.com.uniamerica.qCurso.com.qCurso.comapi.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

	@Query(value = "select * from qcurso.tb_usuarios where id = :id", nativeQuery = true)
	public Optional<Usuario> findById(@Param("id") final Long id);
	@Query("SELECT usuario FROM Usuario usuario WHERE usuario.ativo = true")
	public List<Usuario> findByUsuariosAtivos();

	@Query("from Usuario where nome = :nome")
	public List<Usuario> findByNome(@Param("nome") String nome);

	@Query("from Usuario where portifolio = :portifolio")
	public List<Usuario> findByPortifolio(@Param("portifolio") String portifolio);

	@Query("from Usuario where redeSocial = :redeSocial")
	public List<Usuario> findByRedeSocial(@Param("redeSocial") String redeSocial);

	@Query("from Usuario where email = :email")
	public List<Usuario> findByEmail(@Param("email") String email);

	@Query("from Usuario where dataNascimento = :dataNascimento")
	public List<Usuario> findByDataNascimento(@Param("dataNascimento") LocalDate dataNascimento);

	@Query("from Usuario where genero = :genero")
	public List<Usuario> findByGenero(@Param("genero") Genero genero);
}