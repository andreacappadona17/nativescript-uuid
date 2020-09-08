import { Device } from '@nativescript/core';

export function getUUID() {
  return Device.uuid ? Device.uuid : '';
}
