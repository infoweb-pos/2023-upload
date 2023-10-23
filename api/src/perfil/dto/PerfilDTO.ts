class PerfilDTO {
  id?: number;
  descricao: string;
  nome_social: string;
  foto?: PerfilFotoDTO;
}

class PerfilFotoDTO {
  id?: number;
  nome?: string;
  url?: string;
  buffer?: Buffer[];
}

export { PerfilDTO, PerfilFotoDTO };
