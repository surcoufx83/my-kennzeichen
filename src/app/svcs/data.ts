import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../types';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private user$ = new BehaviorSubject<User | undefined>(undefined);
  public user = this.user$.asObservable();

  constructor() {
    this.init();
  }

  public init() {

  }

}
