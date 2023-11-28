import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface IMenu {
  label: string
  path: string
  icon: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  listMenu: IMenu[] = [
    { label: 'Lead', path: 'lead', icon: 'fa-solid fa-temperature-three-quarters' },
    { label: 'Pipeline', path: 'pipeline', icon: 'fa-brands fa-pagelines' },
    { label: 'Teste', path: 'pipeline', icon: 'fa-solid fa-gopuram' },
  ]

  toggleMenu: boolean = true

  constructor(
    private router: Router
  ) { }

  handleToggleMenu() {
    this.toggleMenu = !this.toggleMenu
    console.log(this.toggleMenu);
  }

  toPath(path: string) {
    this.router.navigate([path])
  }

}
