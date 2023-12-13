package br.com.uniamerica.qCurso.com.qCurso.comapi.entity;

import lombok.*;
import javax.persistence.*;
import com.fasterxml.jackson.annotation.*;
@Entity
@Table(name = "tb_posts", schema = "qcurso")
@NoArgsConstructor
public class PostComent extends AbstractEntity {

    @Getter @Setter
    @JoinColumn(name = "id_usuario")
    @ManyToOne
    @JsonBackReference
    private Usuario usuario;

    @Getter @Setter
    @Column(name = "descricao", nullable = false, length = 255)
    private String descricao;

    @Getter @Setter
    @JoinColumn(name = "id_post")
    @ManyToOne
    @JsonBackReference
    private Post post;
}