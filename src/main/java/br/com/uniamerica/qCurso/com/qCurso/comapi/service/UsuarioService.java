package br.com.uniamerica.qCurso.com.qCurso.comapi.service;

import br.com.uniamerica.qCurso.com.qCurso.comapi.entity.Usuario;
import br.com.uniamerica.qCurso.com.qCurso.comapi.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class UsuarioService {

	@Autowired
	public UsuarioRepository usuarioRepository;

	public Usuario findById(Long id){
		return this.usuarioRepository.findById(id).orElse(new Usuario());
	}

	public List<Usuario> findAll(){
		return this.usuarioRepository.findByUsuariosAtivos();
	}

	@Transactional
	public Usuario save(Usuario usuario){
		return this.usuarioRepository.save(usuario);
	}

	@Transactional
	public void atualizar(final Long id, final Usuario usuario){
		if(id.equals(usuario.getId()) && !this.usuarioRepository.findById(id).isEmpty()){
			this.usuarioRepository.save(usuario);
		}else{
			throw new RuntimeException("Id não encontrado");
		}
	}

	@Transactional
	public void excluir(final Long id){
		if (!this.usuarioRepository.findById(id).isEmpty()){
			this.usuarioRepository.deleteById(id);
		}else{
			throw new RuntimeException("Id não encontrado");
		}
	}
}