import { Component, OnInit } from '@angular/core';
import { PirateBayService } from '../common/pirate-bay.service';

@Component({
  selector: 'app-search-top',
  templateUrl: './search-top.component.html',
  styleUrls: ['./search-top.component.css']
})
export class SearchTopComponent implements OnInit {
  term: string = '';

  constructor(private pirateService: PirateBayService) { }

  ngOnInit() {
  }

  onSubmit(event: Event){
    event.preventDefault();
    this.pirateService.getData(this.term);
    this.term = "";
  }

}
