import { Component } from '@angular/core'

import { HomePage } from '../home/home'
import { StudentPage } from '../student/student'
import { PunchCardPage } from '../punch-card/punch-card'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabHome = HomePage
  tabStudent = StudentPage
  tabPunchCard = PunchCardPage

  constructor() { }
}
