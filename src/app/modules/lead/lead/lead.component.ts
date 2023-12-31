import { Component } from '@angular/core';
import { ITableInfo } from 'src/app/interfaces/ITableInfo';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.scss']
})
export class LeadComponent {

  tableInfo: ITableInfo[] = [
    { column: 'Cod.', field: 'cod', align: 'left', width: '3%' },
    { column: 'fa-solid fa-temperature-three-quarters', field: 'temp', align: 'center', icon: true },
    { column: 'Nome', field: 'name', align: 'left' },
    { column: 'Evangelista', field: 'evang', align: 'left' },
    { column: 'Data', field: 'date', align: 'left' },
    { column: 'Status', field: 'status', align: 'left' },
    { column: 'Telefone', field: 'phone', align: 'left' },
    {
      column: 'Ações', field: 'action', align: 'center', buttons: [
        { icon: 'fa-solid fa-pen-to-square', color: '#FF7900', backgroundColor: 'white' },
        { icon: 'fa-solid fa-address-card', color: '#FF7900', backgroundColor: 'white' }
      ]
    },
  ]

  tableData: object[] = [
    {
      cod: '003', temp: '#555555', name: 'Jasmynne Correa Antoniette Guimarães Braga', evang: 'Diego Gutemberg', date: '08/01/2023', status: 'Não Qualificado', phone: '65 9 9925 2656'
    },
    {
      cod: '006', temp: '#4573A8', name: 'Marcos Albuquerque da Silva', evang: 'Diego Gutemberg', date: '11/01/2023', status: 'Em Qualificação', phone: '65 9 8123 3396'
    },
    {
      cod: '009', temp: '#FFDF25', name: 'Igor Sampaio Montello de Tanakaya', evang: 'Diego Gutemberg', date: '23/01/2023', status: 'Qualificado', phone: '65 9 9223 7746'
    },
    {
      cod: '012', temp: '#D9001B', name: 'Alana Souza Gaime Ferreira', evang: 'Diego Gutemberg', date: '26/01/2023', status: 'Não Qualificado', phone: '65 9 8433 6521'
    },
    {
      cod: '014', temp: '#4573A8', name: 'Jonatan Figueira Mastratoni Zandonadi de Almeida', evang: 'Diego Gutemberg', date: '31/01/2023', status: 'Não Enviado', phone: '65 9 9624 5689'
    },
    {
      cod: '018', temp: '#555555', name: 'Willian Pablo Raduan Frenderike', evang: 'Diego Gutemberg', date: '02/02/2023', status: 'Em Qualificação', phone: '65 9 9269 8711'
    },
    {
      cod: '044', temp: '#FFDF25', name: 'Monica Apareceida da Costa Johansdatter', evang: 'Diego Gutemberg', date: '04/02/2023', status: 'Em Qualificação', phone: '65 9 8127 4933'
    },
    {
      cod: '067', temp: '#D9001B', name: 'Emanuel Furllan Wohrestenner', evang: 'Diego Gutemberg', date: '07/02/2023', status: 'Qualificado', phone: '65 9 9999 9854'
    },
    {
      cod: '078', temp: '#4573A8', name: 'Gabriel Maikon Pedroza', evang: 'Diego Gutemberg', date: '09/02/2023', status: 'Não Qualificado', phone: '65 9 8111 2855'
    },
    {
      cod: '083', temp: '#D9001B', name: 'Joanna Severin Amaral', evang: 'Diego Gutemberg', date: '11/02/2023', status: 'Em Qualificação', phone: '65 9 9229 8347'
    },
    {
      cod: '101', temp: '#555555', name: 'Athur Henrique Augusto Wemer', evang: 'Diego Gutemberg', date: '21/02/2023', status: 'Não Qualificado', phone: '65 9 8466 5171'
    }
  ]

}
