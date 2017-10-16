import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PirateBayService } from '../common/pirate-bay.service';
import { PirateData } from '../model/pirate-data';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit, OnChanges {
	term: string;
	order: string;
	sort: string;
	loading: boolean;

	pirateList: PirateData[];

  	constructor(private pirateService: PirateBayService, private sanitizer: DomSanitizer) {
		this.pirateService.list$.subscribe(
            data => {
				this.pirateList = data;
			},
			err => {
				console.log("Error getting list (check node server) ", err);
		});

		this.pirateService.params$.subscribe(
			value => {
				this.term = value.term
				this.order = value.order
				this.sort = value.sort
			}
		);
		this.pirateService.loading$.subscribe(
			loading => this.loading = loading
		);

	}

	ngOnInit() {
	}

	loadData(order, sort) {
		this.pirateService.getData(this.term, order, sort);
	}

	onGetOrder(search){
		this.loadData(search.name, search.sort);
	}

	ngOnChanges(changes:any) {
	}

}
