package br.com.uniamerica.qCurso.com.qCurso.comapi.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "tb_questionComent", schema = "qcurso")
@NoArgsConstructor
public class QuestionComent extends AbstractEntity {

    @Getter @Setter
    @JoinColumn(name = "id_usuario")
    @ManyToOne
    @JsonBackReference
    private Usuario usuario;

    @Getter @Setter
    @Column(name = "descricao", nullable = false, length = 255)
    private String descricao;

    @Getter @Setter
    @JoinColumn(name = "id_question")
    @ManyToOne
    @JsonBackReference
    private Question question;
}