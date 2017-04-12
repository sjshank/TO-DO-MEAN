import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response} from '@angular/http';

import { APPCONSTANT } from '../config/app.constants';

export class AppUtil {
    constructor(){}

    handleError(error: Response): Observable<any> {
        return Observable.throw(APPCONSTANT.serviceErr);
    }
}