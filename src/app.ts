/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {RouterOutlet, RouteConfig, routerInjectables, RouterLink} from 'angular2/router';

import {Base} from './components/base/base';
import {Dashboard} from './components/dashboard/dashboard';
import {Login} from './components/login/login';

@Component({
	selector: 'app'
})
@View({
	directives: [ RouterOutlet, RouterLink ],
	template: `
		<a router-link="base">base</a>
		<a router-link="dashboard">dashboard</a>
		<a router-link="login">login</a>
		<br>
		<router-outlet></router-outlet>
	`
})
@RouteConfig([
	{ path: '/', component: Base, as: 'base' },
	{ path: '/dashboard', component: Dashboard, as: 'dashboard' },
	{ path: '/login', component: Login, as: 'login' },
])
class App {
	userid: string;
	password: string;

	constructor() {

	}
}
bootstrap(App, [routerInjectables]);
