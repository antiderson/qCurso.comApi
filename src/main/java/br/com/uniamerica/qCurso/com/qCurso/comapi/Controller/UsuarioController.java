package br.com.uniamerica.qCurso.com.qCurso.comapi.Controller;

import br.com.uniamerica.qCurso.com.qCurso.comapi.entity.Usuario;
import br.com.uniamerica.qCurso.com.qCurso.comapi.repository.UsuarioRepository;
import br.com.uniamerica.qCurso.com.qCurso.comapi.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RestController
@CrossOrigin(origins = "http://127.0.0.1:5173")
@RequestMapping("/api/usuarios")
public class UsuarioController {

	@Autowired
	public UsuarioRepository usuarioRepository;

	@Autowired
	public UsuarioService usuarioService;

	@GetMapping
	@CrossOrigin(origins = "http://127.0.0.1:5173")
	public ResponseEntity<?> findAll() {
		return ResponseEntity.ok().body(this.usuarioRepository.findByUsuariosAtivos());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Usuario> findById(
			@PathVariable final Long id
	){
		return ResponseEntity.ok().body(this.usuarioRepository.findById(id).orElse(new Usuario()));
	}

	@PostMapping
	public ResponseEntity<?> cadastrar(@RequestBody final Usuario usuario){
		this.usuarioRepository.save(usuario);
		return ResponseEntity.ok().body("Usuário cadastrado com sucesso");
	}

	@PutMapping("/atualizarGeral/{id}")
	public ResponseEntity<?> atualizar(
			@PathVariable final Long id,
			@RequestBody Usuario usuario
	){
		try{
			this.usuarioService.atualizarGeral(id,usuario);
		}catch (Exception e){
			return ResponseEntity.badRequest().body(e.getMessage());
		}
		return ResponseEntity.ok().body("Usuário atualizado com sucesso");
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> excluir(
			@PathVariable final Long id
	){
		try {
			this.usuarioService.deletarGeral(id);
		}catch (Exception e){
			return ResponseEntity.badRequest().body(e.getMessage());
		}
		return ResponseEntity.ok().body("Usuário deletado com sucesso");
	}
}