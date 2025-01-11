import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,

  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  tipo = 'Teste';
  preco = 100;

  getFullPrice() {
    setTimeout(() => {
      this.tipo = 'Simples';
    }, 4000);

    return 'R$' + this.preco + ',00/Mês';
  }

  plano = {
    tipo: 'Simples',
    preco: 100,
  };
}
