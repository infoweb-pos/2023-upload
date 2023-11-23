import { Injectable } from '@nestjs/common';
import { PerfilDTO } from './dto/PerfilDTO';

const perfis: PerfilDTO[] = [
  {
    id: 1,
    nome_social: 'alunos',
    descricao: 'conta única dos alunos de infoweb',
    foto: {
      id: 1,
      url: 'https://randomuser.me/api/portraits/lego/1.jpg',
    },
  },
];

const procurarPorApelido = (apelido) => {
  const perfil = perfis.filter((perfil) => perfil.nome_social === apelido);
  return perfil[0] ?? undefined;
};
@Injectable()
export class PerfilService {
  atualizarPerfil(apelido: string, perfil: any, imagem: any) {
    for (const indice in perfis) {
      if (perfis[indice].nome_social === apelido) {
        perfis[indice].nome_social = perfil.apelido;
        perfis[indice].descricao = perfil.descricao;
        if (perfil.arquivo != '') {
          perfis[indice].foto.buffer = imagem;
        } else if (perfil.url != '') {
          perfis[indice].foto.url = perfil.url;
        }
        console.log(perfis[indice]);
        return true;
      }
    }
    return false;
  }
  atualizarFotoDePerfilComUrl(apelido: string, url: string): boolean {
    for (const indice in perfis) {
      if (perfis[indice].nome_social === apelido) {
        perfis[indice].foto.url = url;
        return true;
      }
    }
    return false;
  }

  recuperarPorApelido(apelido: string) {
    return procurarPorApelido(apelido);
  }
}
