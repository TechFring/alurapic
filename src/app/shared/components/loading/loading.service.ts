import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { startWith } from "rxjs/operators";

import { LoadingType } from "./loading-type";

@Injectable({
  providedIn: "root",
})
export class LoadingService {
  private loading$ = new Subject<LoadingType>();

  constructor() {}

  getLoading() {
    return this.loading$.asObservable().pipe(startWith(LoadingType.STOPPED));
  }

  start() {
    this.loading$.next(LoadingType.LOADING);
  }

  stop() {
    this.loading$.next(LoadingType.STOPPED);
  }
}
