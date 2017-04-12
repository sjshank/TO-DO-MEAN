import { Injectable } from '@angular/core';
import { Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';

@Injectable()
export class AppHttpService extends Http {

    constructor(backend: XHRBackend, options: RequestOptions, private _router: Router) {
        super(backend, options);
        let user: any = JSON.parse(localStorage.getItem('currentUser'));
        options.headers.set('Authorization', `Bearer ${user['token']}`);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return this._intercept(super.request(url, options));
    }

    options(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this._intercept(super.options(url, options));
    }

    getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
        let user: any = JSON.parse(localStorage.getItem('currentUser'));
        if (options === null) {
            options = new RequestOptions();
        }
        if (options.headers === null) {
            options.headers = new Headers();
        }
        options.headers.append('Accept', 'text/html');
        options.headers.set('Authorization', `Bearer ${user['token']}`);
        return options;
    }



    private _intercept(observable: Observable<Response>): Observable<Response> {
        return observable.catch(this._catchAuthError(this));

    }

    private _catchAuthError(self: AppHttpService) {
        // we have to pass HttpService's own instance here as `self`
        return (err: Response) => {
            console.log(err);
            if (err.status === 401 || err.status === 403) {
               this._router.navigate(['/login']);
               return Observable.toString();
            }
            return Observable.throw(err);
        };
    }

}