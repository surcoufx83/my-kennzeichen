import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DataService } from './svcs/data';
import { User } from './types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {

  user?: User;

  constructor(
    private ds: DataService,
    private router: Router,
  ) {
    this.ds.user.pipe(takeUntilDestroyed()).subscribe((u) => {
      this.user = u;
      if (u === undefined && router.url !== '/login') {
        router.navigate(['/login']);
      }
    });
  }

}
