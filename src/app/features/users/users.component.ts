import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fb-users',
  template: `
    
    <button routerLink="members">Members</button>
    <button routerLink="help">Help</button>
    
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
