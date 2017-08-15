import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {
    private baseUrl = '/api';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }

    getHeroes(): Promise<Hero[]> {
        const url = `${this.baseUrl}/heroes`;
        return this.http.get(url)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
    }

    getHero(id: number): Promise<Hero> {
        const url = `${this.baseUrl}/hero/${id}`;
        return this.http.get(url)
                   .toPromise()
                   .then(response => response.json().data as Hero)
                   .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    create(name: string): Promise<Hero> {
    return this.http
        .post(this.baseUrl, JSON.stringify({name: name}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data as Hero)
        .catch(this.handleError);
    }

    update(hero: Hero): Promise<Hero> {
        const url = `${this.baseUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }
}
