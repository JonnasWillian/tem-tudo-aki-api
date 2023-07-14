import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { UsuarioCadastrarDto } from './dto/usuario.cadastrar.dto';
import { ResultadoDto } from 'src/dto/resultado.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async listar(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async cadastrar(data: UsuarioCadastrarDto): Promise<ResultadoDto>{
    let usuario = new Usuario()
    usuario.nome = data.nome;
    usuario.email = data.email;
    usuario.telefone = data.telefone;
    usuario.password = data.senha;

    return this.usuarioRepository.save(usuario)
      .then((result) => {
        return <ResultadoDto>{
          status: true,
          mensagem: "Usuário cadastrado"
        }
      })
      .catch((error) => {
        return <ResultadoDto>{
          status: false,
          mensagem: "Houve um erro ao cadastrar o usuário"
        }
      })
  }
}