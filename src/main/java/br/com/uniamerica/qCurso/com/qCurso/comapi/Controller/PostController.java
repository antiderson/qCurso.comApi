package br.com.uniamerica.qCurso.com.qCurso.comapi.Controller;

import br.com.uniamerica.qCurso.com.qCurso.comapi.entity.Post;
import br.com.uniamerica.qCurso.com.qCurso.comapi.repository.PostRepository;
import br.com.uniamerica.qCurso.com.qCurso.comapi.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/posts")
public class PostController {

    @Autowired
    public PostRepository postRepository;

    @Autowired
    public PostService postService;


    @GetMapping
    @CrossOrigin(origins = "http://127.0.0.1:5173")
    public ResponseEntity<?> findAll() {
        return ResponseEntity.ok().body(this.postRepository.findByPostsAtivos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Post> findById(
            @PathVariable final Long id
    ){
        return ResponseEntity.ok().body(this.postRepository.findById(id).orElse(new Post()));
    }

    @PostMapping
    public ResponseEntity<?> cadastrar(@RequestBody final Post post){
        this.postRepository.save(post);
        return ResponseEntity.ok().body("Postagem cadastrado com sucesso");
    }

    @PutMapping("/atualizarGeral/{id}")
    public ResponseEntity<?> atualizar(
            @PathVariable final Long id,
            @RequestBody Post post
    ){
        try{
            this.postService.atualizarGeral(id,post);
        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        return ResponseEntity.ok().body("Postagem atualizada com sucesso");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> excluir(
            @PathVariable final Long id
    ){
        try {
            this.postService.deletarGeral(id);
        }catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        return ResponseEntity.ok().body("Postagem deletado com sucesso");
    }
}