/// <reference path="../../../typings/angular2/angular2.d.ts" />

import {Component, View} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';

@Component({
	selector: 'base'
})
@View({
	directives: [ RouterLink ],		
	template: 'Hello {{name}} <a router-link="dashboard">dashboard</a>'	
})
export class Base {
	name: string;
	constructor() {
		this.name = "base";
	}
}