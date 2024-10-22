import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Device } from '../model/device';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'fb-catalog-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <form #f="ngForm" (submit)="saveHandler()">
      <input
        type="text"
        [ngModel]="active?.label"
        name="label"
        class="form-control"
        placeholder="Device Model"
        required
      >
      <input
        type="number"
        [ngModel]="active?.price"
        name="price"
        class="form-control"
        placeholder="Price"
        required
      >

      <div class="btn-group">
        <button 
          type="submit" 
          class="btn btn-info" 
          [disabled]="f.invalid">
          {{active?.id ? 'EDIT' : 'ADD'}}
        </button>

        <button
          type="button"
          class="btn btn-warning"
          (click)="resetHandler()"
          *ngIf="active?.id"
        >
          RESET
        </button>
      </div>
    </form>
  `,
})
export class CatalogFormComponent implements OnChanges {
  @Input() active: Device;
  @Output() save: EventEmitter<Device> = new EventEmitter<any>();
  @Output() reset: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('f') form: NgForm;

  saveHandler() {
    this.save.emit(this.form.value);
  }

  ngOnChanges(changes: SimpleChanges) {
    const active: Device = changes.active.currentValue;
    if (active && !active.id) {
      this.form.reset();
    }
  }

  resetHandler() {
    this.reset.emit();
    this.form.reset();
  }
}
