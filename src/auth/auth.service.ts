import { Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import * as bcrypt from 'bcrypt';

import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private usuarioService: UsuarioService,
        private jwtService: JwtService,
        //private tokenService: TokenService
      ) {}

    async validarUsuario(email: string, senha: string): Promise<any> {
        const usuario = await this.usuarioService.findOne(email);
        if (usuario && bcrypt.compareSync(senha, usuario.password)) {
          const { password, ...result } = usuario;
          return result;
        }
        return null;
    }

    async login (user: any) {
      const payload = {username: user.name, sub: user.userId};
      return {
        acess_token: this.jwtService.sign(payload)
      }
    }
}
