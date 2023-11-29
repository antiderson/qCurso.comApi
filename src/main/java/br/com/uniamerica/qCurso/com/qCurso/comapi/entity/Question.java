package br.com.uniamerica.qCurso.com.qCurso.comapi.entity;

@javax.persistence.Entity
@javax.persistence.Table(name = "tb_question", schema = "qcurso")
@lombok.NoArgsConstructor
public class Question extends AbstractEntity {

    @lombok.Getter @lombok.Setter
    @javax.persistence.JoinColumn(name = "id_usuario")
    @javax.persistence.ManyToOne
    @com.fasterxml.jackson.annotation.JsonBackReference
    private Usuario usuario;

    @lombok.Getter @lombok.Setter
    @javax.persistence.Column(name = "titulo", nullable = false, length = 80)
    private String titulo;

    @lombok.Getter @lombok.Setter
    @javax.persistence.Column(name = "descricao", nullable = false, length = 255)
    private String descricao;

    @lombok.Getter @lombok.Setter
    @javax.persistence.Enumerated(javax.persistence.EnumType.STRING)
    @javax.persistence.Column(name = "categoria", nullable = false)
    private Categoria categoria;

    @lombok.Getter @lombok.Setter
    @javax.persistence.Enumerated(javax.persistence.EnumType.STRING)
    @javax.persistence.Column(name = "statusPost", nullable = false)
    private StatusPost statusPost;

    @lombok.Getter @lombok.Setter
    @javax.persistence.Enumerated(javax.persistence.EnumType.STRING)
    @javax.persistence.Column(name = "tipo", nullable = false)
    private Tipo tipo;
}