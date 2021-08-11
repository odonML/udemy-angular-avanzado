import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  public menu: any[] = [
    {
      title: 'Menu Principal',
      icon: 'mdi mdi-gauge',
      submenu: [
        {title: 'Dashboard', url: '/'},
        {title: 'Progress', url: 'progress'},
        {title: 'Grafica', url: 'grafica1'}
      ]
    },
  ];
  constructor() {}
}
