package br.com.uniamerica.qCurso.com.qCurso.comapi.service;


import br.com.uniamerica.qCurso.com.qCurso.comapi.entity.Post;
import br.com.uniamerica.qCurso.com.qCurso.comapi.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class PostService {

    @Autowired
    public PostRepository postRepository;

    public Post findById(Long id){
        return this.postRepository.findById(id).orElse(new Post());
    }

    public List<Post> findAll(){
        return this.postRepository.findByPostsAtivos();
    }

    @Transactional
    public Post save(Post post){
        return this.postRepository.save(post);
    }

    @Transactional
    public void atualizarGeral(final Long id,final Post post) {
        if (id.equals(post.getId()) && !this.postRepository.findById(id).isEmpty()) {
            this.postRepository.save(post);
        } else {
            throw new RuntimeException("Id não encontrado");
        }
    }

    @Transactional
    public void deletarGeral(final Long id){
        if (!this.postRepository.findById(id).isEmpty()){
            this.postRepository.deleteById(id);
        }else{
            throw new RuntimeException("Id não encontrado");
        }
    }
}