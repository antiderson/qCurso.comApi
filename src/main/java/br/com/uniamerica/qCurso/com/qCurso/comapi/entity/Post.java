package br.com.uniamerica.qCurso.com.qCurso.comapi.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
@Table(name = "tb_posts", schema = "qcurso")
@NoArgsConstructor
public class Post extends AbstractEntity {

    @Getter @Setter
    @JoinColumn(name = "id_usuario")
    @ManyToOne
    @JsonBackReference
    private Usuario usuario;

    @Getter @Setter
    @Column(name = "titulo", nullable = false, length = 100)
    private String titulo;

    @Getter @Setter
    @Column(name = "descricao", nullable = false, length = 255)
    private String descricao;

    @Getter @Setter
    @Enumerated(EnumType.STRING)
    @Column(name = "categoria", nullable = false)
    private Categoria categoria;

    @Getter @Setter
    @Enumerated(EnumType.STRING)
    @Column(name = "tipo", nullable = false)
    private Tipo tipo;
}