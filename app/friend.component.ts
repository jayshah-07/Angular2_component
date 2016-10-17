import { Component } from "@angular/core";

import { FriendService } from "./service/friend.service"

@Component({
	selector:	'my-friends',
	providers:	[ FriendService ],
	template:	`
	<h2> Hello from the {{componentName}}! </h2>
	<div *ngFor=" let f of friends">
	<h4> Name: {{f.name}} </h4> <h4> Age: {{f.Age}}</h4>
	<h4> Occupation: {{f.occupation}} </h4>
	</div>
	`,
	styleUrls: ['./app/friend.component.css']
})

export class FriendComponent{
	componentName: string;
	friends: Array<any>;
	//Assign
	constructor(_friendService: FriendService){
		this.componentName = "FriendComponent";
		this.friends = _friendService.getAllFriends();
	}
 }