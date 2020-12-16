import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getData(key) {
    let data = localStorage.getItem(key);
    return JSON.parse(data);
  }
}
