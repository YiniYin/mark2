import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/toPromise'

import { StudentEntity } from '../entities/student-entity'

@Injectable()
export class StudentService {

  url: string = 'stubs/students.json'

  constructor(public http: Http) { }

  get(): Promise<StudentEntity> {
    return this.http.get(this.url)
      .toPromise()
      .then(res => { return new StudentEntity(res.json()) })
      .catch(this.handleError)
  }

  //TODO: better handle the error globally.
  handleError(err) {

  }

}
