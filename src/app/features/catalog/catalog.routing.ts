import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CatalogComponent}
    ]),
  ],
  exports: [
    RouterModule
  ]
})
export class CatalogRoutingModule { }
