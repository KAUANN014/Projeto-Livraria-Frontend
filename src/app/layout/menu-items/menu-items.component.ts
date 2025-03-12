import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-items',
  standalone: false,
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.scss'
})
export class MenuItemsComponent {

  @Output() itemClicked = new EventEmitter<void>();

  closeMenu() {
    this.itemClicked.emit();
  }

}
