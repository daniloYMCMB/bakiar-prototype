import {Injectable} from '@angular/core';

@Injectable()
export class AppStoreService {
  constructor() {
  }

  public get storage(): Storage {
    return localStorage;
  }

  public cleanStorage() {
    const {storage} = this;
    return storage.clear();
  }

  public getStorageItem(key: string) {
    const {storage} = this;
    return storage.getItem(key);
  }

  public setStorageItem(key: string, value: string) {
    const {storage} = this;
    return storage.setItem(key, value);
  }

  public removeStorageItem(key: string) {
    const {storage} = this;
    return storage.removeItem(key);
  }
}
