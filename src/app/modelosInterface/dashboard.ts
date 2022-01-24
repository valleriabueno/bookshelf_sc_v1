export interface Dashboard {
  titulo: string;
  subtitulo: string;
  img: string;
  conteudo: string;
  link: [{ ref: string, texto: string }];
  cols: number;
  rows: number;
}
