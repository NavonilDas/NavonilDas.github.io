import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
  active: number = 0;
  constructor(private router: Router) { }
  ngOnInit() {
    this.router.events.subscribe(v => {
      if (v instanceof NavigationEnd) {
        if (v.url == '/projects')
          this.active = 1;
        else if (v.url == '/skills')
          this.active = 2;
        else if (v.url == '/education')
          this.active = 3;
        else if (v.url == '/certificates')
          this.active = 4;
        else if (v.url == '/profiles')
          this.active = 5;
        else
          this.active = 0;
      }
    });
  }
}
