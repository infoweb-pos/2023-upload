import { Injectable } from '@nestjs/common';
import { PerfilDTO } from './dto/PerfilDTO';

const perfis: PerfilDTO[] = [
  {
    id: 1,
    nome_social: 'alunos',
    descricao: 'conta única dos alunos de infoweb',
  },
];
@Injectable()
export class PerfilService {
  recuperarPorApelido(apelido: string) {
    const perfil = perfis.filter((perfil) => perfil.nome_social === apelido);
    return perfil[0] ?? undefined;
  }
}
