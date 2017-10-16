import { Component, OnChanges, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-order',
	template: `
		<a href="#" (click)="onClickOrder($event)">
			{{name}} 
			<ng-container *ngIf="isShow">
				<div *ngIf="isAsc;then contentAsc else contentDesc"></div>
				<ng-template #contentAsc><span> &darr;</span></ng-template>
				<ng-template #contentDesc><span> &uarr;</span></ng-template>
			</ng-container>
		</a>
  	`,
  	styleUrls: []
})
export class OrderComponent implements OnInit, OnChanges {
	isAsc: boolean;
	isShow: boolean;

	@Input() 
	name : string; 
	@Input() 
	sort : string; 
	@Input() 
	current : string; 
	@Output() 
	sendOrder = new EventEmitter<object>();

	constructor() { }
 
	ngOnInit() {
	}

	onClickOrder(event: Event){
		event.preventDefault();
		this.sendOrder.emit({name: this.name, sort: this.sort});
	}

	ngOnChanges(changes:any)  {
		this.isAsc = this.sort=='asc' ? true : false; 
		this.isShow = this.name==this.current ? true : false;
	}

}
