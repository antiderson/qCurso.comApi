package br.com.uniamerica.qCurso.com.qCurso.comapi.service;


import br.com.uniamerica.qCurso.com.qCurso.comapi.entity.Question;
import br.com.uniamerica.qCurso.com.qCurso.comapi.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class QuestionService {

    @Autowired
    public QuestionRepository questionRepository;

    public Question findById(Long id){
        return this.questionRepository.findById(id).orElse(new Question());
    }

    public List<Question> findAll(){
        return this.questionRepository.findByQuestionAtivos();
    }

    @Transactional
    public Question save(Question question){
        return this.questionRepository.save(question);
    }

    @Transactional
    public void atualizar(final Long id,final Question question) {
        if (id.equals(question.getId()) && !this.questionRepository.findById(id).isEmpty()) {
            this.questionRepository.save(question);
        } else {
            throw new RuntimeException("Id não encontrado");
        }
    }

    @Transactional
    public void deletar(final Long id){
        if (!this.questionRepository.findById(id).isEmpty()){
            this.questionRepository.deleteById(id);
        }else{
            throw new RuntimeException("Id não encontrado");
        }
    }
}