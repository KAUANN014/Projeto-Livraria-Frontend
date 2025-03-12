import { Component, ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import {   Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @ViewChild('menu') menu!: MatDrawer; // Pegando o menu pelo ViewChild

  toggleMenu() {
    this.menu.toggle();
  }

}
