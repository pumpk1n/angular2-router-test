/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {Router, RouterOutlet, RouteConfig, routerInjectables, RouterLink} from 'angular2/router';
import {Inject} from 'angular2/di';

import {Base} from './components/base/base';
import {Dashboard} from './components/dashboard/dashboard';
import {Login} from './components/login/login';

@Component({
	selector: 'app'
})
@View({
	template: '<router-outlet></router-outlet>',	
	directives: [ RouterOutlet ]
})
@RouteConfig([
	{ path: '/', component: Base, as: 'base' },
	{ path: '/dashboard', component: Dashboard, as: 'dashboard' },
	{ path: '/login', component: Login, as: 'login' },
])
class App { }

bootstrap(App, [routerInjectables]);