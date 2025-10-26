package br.com.uniamerica.qCurso.com.qCurso.comapi.Controller;

import br.com.uniamerica.qCurso.com.qCurso.comapi.entity.Post;
import br.com.uniamerica.qCurso.com.qCurso.comapi.entity.Question;
import br.com.uniamerica.qCurso.com.qCurso.comapi.entity.Stack;
import br.com.uniamerica.qCurso.com.qCurso.comapi.entity.StatusQuestion;
import br.com.uniamerica.qCurso.com.qCurso.comapi.entity.Usuario;
import br.com.uniamerica.qCurso.com.qCurso.comapi.repository.QuestionRepository;
import br.com.uniamerica.qCurso.com.qCurso.comapi.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/questions")
public class QuestionController {

    @Autowired
    public QuestionRepository questionRepository;

    @Autowired
    public QuestionService questionService;

    @GetMapping
    public ResponseEntity<?> findAll() {
        return ResponseEntity.ok().body(this.questionRepository.findByQuestionAtivos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Question> findById(@PathVariable final Long id) {
        return ResponseEntity.ok().body(this.questionRepository.findById(id).orElse(new Question()));
    }

    // @PostMapping
    // public ResponseEntity<?> cadastrar(final Question question) {
    //     try {
    //         // Validar dados obrigatórios
    //         if (question.getTitulo() == null || question.getTitulo().trim().isEmpty()) {
    //             return ResponseEntity.badRequest().body("Título é obrigatório");
    //         }
    //         if (question.getDescricao() == null || question.getDescricao().trim().isEmpty()) {
    //             return ResponseEntity.badRequest().body("Descrição é obrigatória");
    //         }
    //         if (question.getStack() == null) {
    //             return ResponseEntity.badRequest().body("Stack é obrigatória");
    //         }

    //         Question savedQuestion = this.questionRepository.save(question);
    //         return ResponseEntity.ok().body(savedQuestion); // Retornar a questão salva
    //     } catch (Exception e) {
    //         return ResponseEntity.badRequest().body("Erro ao cadastrar: " + e.getMessage());
    //     }
    // }


    // @PostMapping
    // public ResponseEntity<?> cadastrar( final Question question){
    //     this.questionRepository.save(question);
    //     return ResponseEntity.ok().body("Postagem cadastrada com sucesso!");
    // }







    @PostMapping
    public ResponseEntity<?> cadastrar(
            @RequestParam String titulo,
            @RequestParam String descricao,
            @RequestParam Stack stack,
            @RequestParam StatusQuestion statusQuestion,
            @RequestParam("usuario.id") Long usuarioId) {

        try {
            System.out.println("Dados recebidos:");
            System.out.println("Título: " + titulo);
            System.out.println("Descrição: " + descricao);
            System.out.println("Stack: " + stack);
            System.out.println("Status: " + statusQuestion);
            System.out.println("Usuário ID: " + usuarioId);

            Question question = new Question();
            question.setTitulo(titulo);
            question.setDescricao(descricao);
            question.setStack(stack);
            question.setStatusQuestion(statusQuestion);

            // Criar usuário apenas com ID
            Usuario usuario = new Usuario();
            usuario.setId(usuarioId);
            question.setUsuario(usuario);

            this.questionRepository.save(question);
            return ResponseEntity.ok().body("Postagem cadastrada com sucesso!");

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Erro: " + e.getMessage());
        }
    }










    @PutMapping("/atualizar/{id}")
    public ResponseEntity<?> atualizar(@PathVariable final Long id, @RequestBody Question question) {
        try {
            this.questionService.atualizar(id, question);
            return ResponseEntity.ok().body("Questão atualizada com sucesso");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> excluir(@PathVariable final Long id) {
        try {
            this.questionService.deletar(id);
            return ResponseEntity.ok().body("Questão deletada com sucesso");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}