import { Component } from '@angular/core';

@Component({
  selector: 'fb-navbar',
  template: `
    <nav class="navbar navbar-expand navbar-dark bg-dark text-white">
      <a class="navbar-brand">LOGO</a>
      <div class="navbar-collapse collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link"
              routerLink="/login"
              routerLinkActive="active">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" 
               routerLinkActive="active" 
               routerLink="/catalog">Catalog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link"
               routerLinkActive="active"
               routerLink="/users">users</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: []
})
export class NavbarComponent {}
