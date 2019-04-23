import { Device } from '../model/device';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogStore {
  devices: Device[];
  active: Device = {};

  load(devices: Device[]) {
    this.devices = devices;
  }

  add(device: Device) {
    // mutable
    // this.devices.push(device);
    // immutable
    this.devices = [...this.devices, device]
    this.active = {};
  }

  delete(id: number) {
    // mutable
    // const index = this.devices.findIndex(d => d.id === id);
    // this.devices.splice(index, 1);
    // immutable
    this.devices = this.devices.filter(d => d.id !== id);
    this.active = {};
  }

  edit(device: Device) {
    console.log(device, this.active.id)
    // mutable
    // const index = this.devices.findIndex(d => d.id === this.active.id);
    // this.devices[index] = device;
    // immutable
    this.devices = this.devices.map(d => d.id === device.id ? {...d, ...device} : d);
  }

  setActive(device: Device) {
    this.active = device;
  }

  reset() {
    this.active = {};
  }
}
