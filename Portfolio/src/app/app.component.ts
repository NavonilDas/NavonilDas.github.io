import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { routerTransition } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[routerTransition]
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

  openMenu(x : HTMLElement){
    x.classList.toggle('ham-chng');
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
