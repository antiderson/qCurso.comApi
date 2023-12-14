package br.com.uniamerica.qCurso.com.qCurso.comapi.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name = "tb_posts", schema = "qcurso")
@NoArgsConstructor

@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Post extends AbstractEntity {

//    @Getter @Setter
        @ManyToOne
//        @JsonBackReference
        @JoinColumn(name = "id_usuario")
        private Usuario usuario;

    @Getter @Setter
    @Column(name = "titulo", nullable = false, length = 100)
    private String titulo;

    @Getter @Setter
    @Column(name = "descricao", nullable = false, length = 255)
    private String descricao;

    @Getter @Setter
    @Enumerated(EnumType.STRING)
    @Column(name = "stack", nullable = false)
    private Stack stack;

    @Getter @Setter
    @Enumerated(EnumType.STRING)
    @Column(name = "categoria", nullable = false)
    private Categoria categoria;

//    @Getter @Setter
    @OneToMany(mappedBy = "post", cascade = CascadeType.REMOVE)
//    @JsonManagedReference
    private List<PostComent> postComent;
}