import {Component, ViewEncapsulation} from '@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {Home} from './components/home/home';
import {All} from './components/all/all';
import {Active} from './components/active/active';
import {Completed} from './components/completed/completed';
import {About} from './components/about/about';
import {RepoBrowser} from './components/repo-browser/repo-browser';

@Component({
  selector: 'seed-app',
  providers: [],
  styleUrls:['../assets/base.css','../assets/index.css'],
  pipes: [],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/seed-app.html',
  encapsulation: ViewEncapsulation.None
})
@RouteConfig([
  { path: '/',            component: All,       name: 'All', useAsDefault: true },
  { path: '/active',      component: Active,    name: 'Active' },
  { path: '/completed',   component: Completed, name: 'Completed' },
])
export class SeedApp {

  constructor() {}

}
