import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isToggleVisible: boolean = true;

  name = '';
  @Output() burgerMenuClick = new EventEmitter<boolean>();

  constructor(private readonly router: Router) {
    router.events.subscribe((val) => {
      this.name = sessionStorage.getItem('userDetail');
      if (val instanceof NavigationEnd) {
        if (val.url == '/dashboard') {
          this.isToggleVisible = false;
        } else {
          this.isToggleVisible = true;
        }
      }
    });
  }

  ngOnInit(): void {}

  home() {}

  onExpandBar() {
    console.log('Button Clicked');
    this.burgerMenuClick.emit(true);
  }
}
