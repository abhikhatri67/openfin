import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number > 64) {
      this.headerBackgroundColor = 'white';
    } else {
      this.headerBackgroundColor = 'transparent';
    }
  }

  headerBackgroundColor = 'transparent';

  constructor() {}

  ngOnInit(): void {}
}
