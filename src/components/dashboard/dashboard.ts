/// <reference path="../../../typings/angular2/angular2.d.ts" />

import {Component, View} from 'angular2/angular2';

@Component({
	selector: 'dashboard'
})
@View({
	template: 'Hello {{name}}'
})
export class Dashboard {
	name: string;
	constructor() {
		this.name = "dashboard";
	}
}
