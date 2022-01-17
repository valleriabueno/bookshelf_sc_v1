import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {
  usuario={userName: 'Victor Icoma', icone:'remember_me'};
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'O melhor livro de janeiro', img: '../../assets/imagens/1.png', cols: 1, rows: 1 },
          { title: 'Dica dos Leitores', img: '../../assets/imagens/2.png', cols: 1, rows: 1 },
          { title: 'O mais comentado da semana', img: '../../assets/imagens/3.png', cols: 1, rows: 1 },
          { title: 'Indicação do time BookShelf', img: '../../assets/imagens/4.png', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'O melhor Livro de Janeiro', img: '../../assets/imagens/1.png', cols: 2, rows: 1 },
        { title: 'Dica dos Leitores', img: '../../assets/imagens/2.png', cols: 1, rows: 1 },
        { title: 'O mais comentado da semana', img: '../../assets/imagens/3.png', cols: 1, rows: 2 },
        { title: 'Indicação do Time BookShelf', img: '../../assets/imagens/4.png', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) { }
}
