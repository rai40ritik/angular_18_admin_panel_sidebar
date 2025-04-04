import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sub-menu-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './sub-menu-layout.component.html',
  styleUrl: './sub-menu-layout.component.css'
})
export class SubMenuLayoutComponent {
  menuList:any []= [
    {
      title:'Home',
      children: [
        {  title:'Dashboard',  route:'dashboard' },
        { title:'Circular',  route:'circular'  }
      ]
    },
    {
      title:'Employee',
      children: [
        {title:'New Employe',route:'employee' },
        {title:'Employee List6',route:'employee' },
      ]
    },
    // {
    //   title:'Master',
    //   children: [
    //     {title:'City',route:'new-Empl' },
    //     {title:'State',route:'Emp-list' },
    //     {title:'District',route:'Emp-list' },
    //     {title:'Dropdpown',route:'Emp-list' },
    //     {title:'Designations',route:'Emp-list' }
    //   ]
    // }
  ];
  expandedMenu: string ='';

  onExpand(parentMenu: string) {
    if( this.expandedMenu === parentMenu) {
      this.expandedMenu = '';
    } else {
      this.expandedMenu = parentMenu;
    }
   
  }
}
