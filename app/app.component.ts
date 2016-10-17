import { Component } from "@angular/core";

import { FriendComponent } from "./friend.component"; 
import { FriendService } from "./service/friend.service";


@Component({
	selector:	'my-app',
	directives:	[ FriendComponent ],
	templateUrl: './app/app.component.html',
	styleUrls: ['./app/app.component.css']
})

export class AppComponent{
	componentName:string = "AppComponent";
	constructor(){ }
 }