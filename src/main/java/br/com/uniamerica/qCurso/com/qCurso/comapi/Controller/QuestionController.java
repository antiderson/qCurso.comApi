package br.com.uniamerica.qCurso.com.qCurso.comapi.Controller;

import br.com.uniamerica.qCurso.com.qCurso.comapi.entity.Question;
import br.com.uniamerica.qCurso.com.qCurso.comapi.repository.QuestionRepository;
import br.com.uniamerica.qCurso.com.qCurso.comapi.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/questions")
public class QuestionController {

    @Autowired
    public QuestionRepository questionRepository;

    @Autowired
    public QuestionService questionService;


    @GetMapping
    @CrossOrigin(origins = "http://127.0.0.1:5173")
    public ResponseEntity<?> findAll() {
        return ResponseEntity.ok().body(this.questionRepository.findByQuestionAtivos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Question> findById(
            @PathVariable final Long id
    ){
        return ResponseEntity.ok().body(this.questionRepository.findById(id).orElse(new Question()));
    }

    @PostMapping
    public ResponseEntity<?> cadastrar(@RequestBody final Question question){
        this.questionRepository.save(question);
        return ResponseEntity.ok().body("Questão cadastrada com sucesso");
    }

    @PutMapping("/atualizar/{id}")
    public ResponseEntity<?> atualizar(
            @PathVariable final Long id,
            @RequestBody Question question
    ){
        try{
            this.questionService.atualizar(id,question);
        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        return ResponseEntity.ok().body("Questão atualizada com sucesso");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> excluir(
            @PathVariable final Long id
    ){
        try {
            this.questionService.deletar(id);
        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        return ResponseEntity.ok().body("Questão deletada com sucesso");
    }
}