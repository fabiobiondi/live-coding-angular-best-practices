import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { HelpComponent } from './components/help/help.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UsersComponent, HelpComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersComponent,
        children: [
          { path: 'members', loadChildren: './components/members/members.module#MembersModule'},
          { path: 'help', component: HelpComponent },
          { path: '**', redirectTo: 'members' },
        ]
      },

    ])
  ]
})
export class UsersModule { }
