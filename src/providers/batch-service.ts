import { Injectable } from '@angular/core'
import 'rxjs/add/operator/toPromise'

import { Http } from '@angular/http'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class BatchService {

  url: string = 'stubs/batch.json'

  constructor(public http: Http) {
  }

  get<T>(): Promise<T>{ 
    return this.http.get(this.url)
      .toPromise()
      .then(res => res.json() as T)
      .catch(this.handleError)
  }

  //TODO: better handle the error globally.
  handleError(err) {

  }
}
