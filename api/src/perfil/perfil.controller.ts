import { Controller, Get, Param } from '@nestjs/common';
import { PerfilService } from './perfil.service';

@Controller(':apelido/perfil')
export class PerfilController {
  constructor(private readonly servico: PerfilService) {}

  @Get()
  recuperar(@Param() parametro: any) {
    const perfil = this.servico.recuperarPorApelido(parametro.apelido);
    if (perfil) {
      return {
        estado: 'ok',
        ...perfil,
      };
    }
    return {
      estado: 'nok',
      mensagem: `perfil do usuário ${parametro.apelido} não encontrado`,
    };
  }
}
