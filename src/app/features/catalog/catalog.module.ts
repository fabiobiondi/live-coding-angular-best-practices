import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { CatalogListComponent } from './components/catalog-list.component';
import { CatalogFormComponent } from './components/catalog-form.component';
import { OsIconComponent } from './components/os-icon.component';
import { PriceComponent } from './components/price.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CatalogRoutingModule } from './catalog.routing';

@NgModule({
  declarations: [
    CatalogComponent,
    CatalogListComponent,
    CatalogFormComponent,
    OsIconComponent,
    PriceComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CatalogRoutingModule
  ]
})
export class CatalogModule { }
