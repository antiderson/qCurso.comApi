package br.com.uniamerica.qCurso.com.qCurso.comapi.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.util.List;

@NoArgsConstructor
@Entity
@Table(name = "tb_question", schema = "qcurso")
public class Question extends AbstractEntity {

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
    @Column(name = "stack", nullable = false)
    private Stack stack;

    @Getter @Setter
    @Enumerated(EnumType.STRING)
    @Column(name = "statusPost", nullable = false)
    private StatusPost statusPost;

    @Getter @Setter
    @OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE)
    @JsonManagedReference
    private List<QuestionComent> questionComents;

}