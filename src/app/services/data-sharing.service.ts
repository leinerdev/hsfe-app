import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataSharing {
  prop: boolean = false;
  propObservable = new BehaviorSubject(this.prop);

  constructor() {}

  getData() {
    return this.prop;
  }

  getAsyncData() {
    return this.propObservable.asObservable();
  }

  setData(prop: boolean) {
    this.prop = prop;
  }

  setAsyncData(prop: boolean) {
    this.propObservable.next(prop);
  }
}
