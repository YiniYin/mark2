import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/toPromise'

import { PunchCardEntity } from '../entities/punch-card-entity'

@Injectable()
export class PunchCardService {

    url: string = 'stubs/punch-cards.json'

    constructor(public http: Http) { }

    get(): Promise<PunchCardEntity> {
        return this.http.get(this.url)
            .toPromise()
            .then(res => {
                return new PunchCardEntity(res.json())
            })
            .catch(this.handleError)
    }

    //TODO: better handle the error globally.
    handleError(err) {

    }

}
