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
    @Column(name = "descricao", nullable = true, length = 255)
    private String descricao;

    @Getter @Setter
    @Enumerated(EnumType.STRING)
    @Column(name = "categoria", nullable = false, length = 30)
    private Categoria categoria;

    @Getter @Setter
    @Enumerated(EnumType.STRING)
    @Column(name = "statusPost", nullable = false, length = 30)
    private StatusPost statusPost;

    @Getter @Setter
    @Enumerated(EnumType.STRING)
    @Column(name = "tipo", nullable = false, length = 30)
    private Tipo tipo;
}