import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { APPCONSTANT } from '../config/app.constants';
import { AppUtil } from '../utils/app.util';
import { AppHttpService } from '../utils/http.service';

@Injectable()
export class ToDOService {
    private material: Object = null;

    constructor(private _httpService: AppHttpService) {

    }

    addItem(item: Object): Observable<any> {
        return this._httpService.post(`${APPCONSTANT.addTodoUrl}`, item)
            .map((response: Response) => <any> response.json())
            .catch(this.handleError);
    };

    retrieveItem(id: string): Observable<boolean> {
        return this._httpService.get(`${APPCONSTANT.getTodoUrl}${id}`)
            .map((response: Response) => <any> response.json())
            .catch(this.handleError);
    };

    list(): Observable<any> {
        return this._httpService.get(`${APPCONSTANT.getTodoListUrl}`)
            .map((response: Response) => <any> response.json())
            .catch(this.handleError);
    };

    deleteItem(id: string): Observable<any> {
        return this._httpService.get(`${APPCONSTANT.deleteTodoUrl}${id}`)
            .map((response: Response) => <any> response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response): Observable<any> {
        return Observable.throw(APPCONSTANT.serviceErr);
    }

}