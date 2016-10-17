import { Injectable } from "@angular/core";

@Injectable()
export class FriendService {
	friends: Array<any>;

	constructor(){
		this.friends = [
			{age: 40, name:"smith", occupation:"Engineer" },
			{age: 20, name:"jay", occupation:"Actor" },
			{age: 22, name:"suman", occupation:"Designer" },
			{age: 22, name:"Ridhima", occupation:"Dancer" },
			{age: 30, name:"Prakash", occupation:"Developer" },
			{age: 23, name:"Uppi", occupation:"Engineer" },
			{age: 24, name:"stuti", occupation:"manager" },
			{age: 24, name:"Tejas", occupation:"Officer" },
			{age: 24, name:"sarthak", occupation:"Marketing Manager" },
			{age: 23, name:"shankap", occupation:"Engineer" },
			{age: 24, name:"vashin", occupation:"Designer" },
			{age: 33, name:"John", occupation:"Professor" },
			{age: 35, name:"Amit", occupation:"Scientist" }
		]
	}

	getAllFriends(){
		return this.friends;
	}
}