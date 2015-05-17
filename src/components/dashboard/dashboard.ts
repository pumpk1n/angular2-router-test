/// <reference path="../../../typings/angular2/angular2.d.ts" />

import {Component, View} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';

@Component({
	selector: 'dashboard'
})
@View({
	directives: [ RouterLink ],	
	template: 'Hello {{name}} <a router-link="login">login</a>'	
})	
export class Dashboard {
	name: string;
	constructor() {
		this.name = "dashboard";
	}
}
