import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'

import { StudentService } from '../../providers/student-service'
import { StudentEntity } from '../../entities/student-entity'


@IonicPage()
@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class StudentPage {

  studentEntity;
  students;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public studentSrv: StudentService) {
  }

  ngOnInit() {
    this.studentSrv.get()
      .then(studentEntity => {
        this.studentEntity = studentEntity
        
        this.students = studentEntity.students
      })
  }

  searchStudents(e) {
    this.students = this.studentEntity.search(e.target.value)
  }
}
