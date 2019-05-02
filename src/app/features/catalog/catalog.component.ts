import { Component } from '@angular/core';
import { CatalogService } from './services/catalog.service';
import { CatalogStore } from './services/catalog.store';

@Component({
  selector: 'fb-catalog',
  template: `

    <fb-card title="FORM">
      <fb-catalog-form
        [active]="store?.active"
        (save)="actions.save($event)"
        (reset)="actions.reset($event)"
      ></fb-catalog-form>
    </fb-card>

    <fb-card title="LIST">
      <fb-catalog-list
        [devices]="store.devices"
        [active]="store.active"
        (setActive)="actions.setActive($event)"
        (delete)="actions.deleteHandler($event)"
      ></fb-catalog-list>
    </fb-card>

  `,
})
export class CatalogComponent {
  constructor(
    public actions: CatalogService,
    public store: CatalogStore
  ) {
    actions.getAll();
  }
}
