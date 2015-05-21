/// <reference path="../../../typings/angular2/angular2.d.ts" />

import {Component, View} from 'angular2/angular2';

@Component({
	selector: 'base'
})
@View({
	template: 'Hello {{name}}'
})
export class Base {
	name: string;
	constructor() {
		this.name = "base";
	}
}
