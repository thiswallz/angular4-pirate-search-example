import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import { Subject }    from 'rxjs/Subject';
import { BehaviorSubject }    from 'rxjs/BehaviorSubject';
import { PirateData } from '../model/pirate-data';
import { Params } from '../model/params';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PirateBayService {

	private pirateUrl = 'http://localhost:3000/pirateBay';
	private list = new Subject<PirateData[]>();    
	list$ = this.list.asObservable();

	private params = new Subject<Params>();    
	params$ = this.params.asObservable();

	private loading = new BehaviorSubject<boolean>(false);    
	loading$ = this.loading.asObservable();


	constructor (private http: Http) {} 
	
	getData(term: string = '', order: string = 'name', sort: string = 'asc') {
		if(!term)
			return false;
		this.loading.next(true);
		this.params.next({term, order, sort: sort=='asc'?'desc':'asc'});
		this.http.get(`${this.pirateUrl}?term=${term}&order=${order}&sort=${sort}`)
		.map((res:Response) => this.list.next(res.json()))
		.finally(() => this.loading.next(false))
		.catch((error:any) => {
			this.list.error(new Error(error || 'Server error'));
			return Observable.throw(error.json().error || 'Server error')
		}).subscribe();
		
	}
}
