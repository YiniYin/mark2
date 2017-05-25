import { Component } from '@angular/core'

import { HomePage } from '../home/home'
import { StudentPage } from '../student/student'
import { AttendencePage } from '../attendence/attendence'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabHome = HomePage
  tabStudent = StudentPage
  tabAttendence = AttendencePage

  constructor() { }
}
