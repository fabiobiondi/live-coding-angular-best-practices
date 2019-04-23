import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersComponent } from './members.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MembersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: MembersComponent }
    ])
  ]
})
export class MembersModule { }
