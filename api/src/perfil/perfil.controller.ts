import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
} from '@nestjs/common';
import { PerfilService } from './perfil.service';
import { clear } from 'console';

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

  @Post()
  atualizarPerfil(
    @Param() parametro: any,
    @Body() perfil,
    @UploadedFile() imagem: Express.Multer.File,
  ) {
    if (this.servico.atualizarPerfil(parametro.apelido, perfil, imagem)) {
      return {
        estado: 'ok',
      };
    }
    return {
      estado: 'nok',
    };
  }

  @Post('/foto/url')
  atualizarPerfilComUrlDeFoto(@Param() parametro: any, @Body() json) {
    if (this.servico.atualizarFotoDePerfilComUrl(parametro.apelido, json.url)) {
      return {
        estado: 'ok',
      };
    }
    return {
      estado: 'nok',
    };
  }
}
