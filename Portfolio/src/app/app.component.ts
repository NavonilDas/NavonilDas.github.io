import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { routerTransition } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerTransition]
})
export class AppComponent {
  title = 'Portfolio';
  active: number = 0;
  constructor(private router: Router) { }
  ngOnInit() {
    var x = document.getElementById('loading-img');
    this.router.events.subscribe(v => {
      if (v instanceof RouteConfigLoadStart) {
        x.style.display = "flex";
      } else if (v instanceof RouteConfigLoadEnd) {
        console.log("end");
        setTimeout(() => {
          x.style.display = "none";
        }, 100);
      }
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

  openMenu(x: HTMLElement, menu: HTMLElement) {
    x.classList.toggle('ham-chng');
    if (menu.onclick == null) {
      menu.onclick = function () {
        x.classList.remove('ham-chng');
        menu.removeAttribute("style")
      }
    }
    if (menu.style.width == "145px") {
      menu.removeAttribute("style")
    }
    else {
      menu.style.width = "145px";
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
