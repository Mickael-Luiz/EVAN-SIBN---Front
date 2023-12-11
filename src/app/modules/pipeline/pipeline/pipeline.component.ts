import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface IContainer {
  header: string;
  card: ICard[];
}

interface ICard {
  name: string;
  email: string;
  phone: string;
  status: string;
}

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.scss']
})
export class PipelineComponent {

  container: IContainer[] = [
    {header: 'QUALIFICADO', card: [
      { name: 'João Guilherme', email: '@joao_guilher', phone: '(65) 9 9232 9087', status: 'red' },
      { name: 'Pedro Henrique Laite', email: '@pedro23_laite', phone: '(65) 9 8492 0872', status: 'yellow' },
      { name: 'Marina Regina Cheir', email: '@cheir_regina', phone: '(65) 9 9900 0795', status: 'blue' },
      { name: 'Janaína Petry Gomes', email: '@j_petry_gomes', phone: '(65) 9 8178 3356', status: 'yellow' },
      { name: 'Rubens Souza Enno', email: '@enno_rubens', phone: '(65) 9 9346 7896', status: 'red' }
    ]},
    {header: 'PROSPECÇÃO', card: [
      {name: 'Karina Almeida Castro', email: '@almeida_karina', phone: '(65) 9 8956 7896', status: 'yellow' },
      {name: 'Ruan Jorge Castilho', email: '@castilho_jorge', phone: '(65) 9 8189 9955', status: 'red' },
      {name: 'Angélica Liandra Keller', email: '@kellerliandra_a', phone: '(65) 9 8821 7769', status: 'yellow' },
      {name: 'Julianna Nathália ', email: '@julianna_nath', phone: '(65) 9 9266 1133', status: 'blue' }
    ]},
    {header: 'CONEXÃO', card: [
      {name: 'Patrícia Verneck', email: '@patriciaverneck', phone: '(65) 9 8100 1622', status: 'blue' },
      {name: 'Pablo Rincon Albertino', email: '@rincon_pablo', phone: '(65) 9 9245 7888', status: 'yellow' },
      {name: 'Joana Mara Loyola', email: '@joanamara_loy', phone: '(65) 9 8833 7461', status: 'red' }
  ]},
    {header: 'CULTO BÍBLICO', card: [
      {name: 'Yuri Renato Muller', email: '@yurirenato', phone: '(65) 9 8422 2222', status: 'red' },
      {name: 'Rayssa Rebecca Silva', email: '@rebecca_rayssa', phone: '(65) 9 9999 0063', status: 'yellow' }
  ]},
    {header: 'CONVERSÃO', card: [
      {name: 'Melissa Andrade Quirino', email: '@melissa_quirino', phone: '(65) 9 9233 5439', status: 'red' }
    ]},
  ]

  constructor(private router: Router) {
    this.sortContainer()
  }

  startDrag(event: any, originalContainer: string, cardId: string) {
    event.dataTransfer.setData('originalContainer', originalContainer);
    event.dataTransfer.setData('cardId', cardId);
  }

  allowDrop(event: any) {
    event.preventDefault();
  }

  drop(event: any, targetContainerHeader: string) {
    event.preventDefault();
    const origContainerHeader = event.dataTransfer.getData('originalContainer');
    const cardID = event.dataTransfer.getData('cardId');

    const sourceContainer = this.container.find(container => container.header === origContainerHeader);
    const cardIndex = sourceContainer!.card.findIndex(card => card.name === cardID);
    const cardRemoved = sourceContainer!.card.splice(cardIndex, 1)[0];

    const targetContainer = this.container.find(container => container.header === targetContainerHeader);
    targetContainer?.card.push(cardRemoved)

    this.container.find(container => container.header === origContainerHeader)?.card.filter(card => card.name !== cardID);
    this.sortContainer()
  }

  sortContainer() {
    this.container.forEach(container => {
      container.card.sort((a, b) => {

        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase()

        if(nameA < nameB) {
          return -1;
        }
        if(nameA > nameB) {
          return 1;
        }
        return 0;
      })
    })
  }

  navigateTo() {
    this.router.navigate(['pipeline/progress'])
  }

}
