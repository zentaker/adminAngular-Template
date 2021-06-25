import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any[] = [
    {
      titulo: 'Dasboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        {  titulo: 'main', url: '' },
        {  titulo: 'ProgressBar', url: 'progress' },
        {  titulo: 'Graficos', url: 'grafica1' },

      ]

    }
  ]

  constructor() { }
}
