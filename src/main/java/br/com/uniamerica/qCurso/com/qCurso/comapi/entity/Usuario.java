package br.com.uniamerica.qCurso.com.qCurso.comapi.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;


@Entity
@Table(name = "td_usuarios", schema = "qcurso")
@NoArgsConstructor
public class Usuario extends AbstractEntity {

	@Getter @Setter
	@Column(name = "nome", nullable = false, length = 30, unique = true)
	private String nome;

	@Getter @Setter
	@Column(name = "portifolio", length = 50, nullable = true)
	private String portifolio;

	@Getter @Setter
	@Column(name = "redeSocial", length = 80, unique = true, nullable = true)
	private String redeSocial;

	@Getter @Setter
	@Column(name = "email", length = 40, unique = true, nullable = false)
	private String email;

	@Getter @Setter
	@Column(name = "dataNascimento", nullable = true)
	private LocalDate dataNascimento;

	@Getter @Setter
	@Enumerated(EnumType.STRING)
	@Column(name = "genero", nullable = false)
	private Genero genero;

	@Getter @Setter
	@OneToMany(mappedBy = "usuario", cascade = CascadeType.REMOVE)
	@JsonManagedReference
	private List<Post> posts;


}