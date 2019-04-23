import { Component } from '@angular/core';

@Component({
  selector: 'fb-root',
  template: `
    <fb-navbar></fb-navbar>
    <div class="container mt-3">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {

}
