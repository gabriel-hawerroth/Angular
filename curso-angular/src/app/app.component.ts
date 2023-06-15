import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {}
  userName = 'Joaquim';
  userData = {
    email: 'gabrielhawerroth04@gmail.com',
    role: 'admin',
  };

  currentRoute = this.router.url;

  title = 'curso-angular';

  ngOnInit(): void {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.currentRoute = e.url;
      }
    });
  }
}
