import { BrowserModule } from '@angular/platform-browser'
import { NgModule, ErrorHandler } from '@angular/core'
import { HttpModule } from '@angular/http'
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular'
import { MyApp } from './app.component'

import { TabsPage } from '../pages/tabs/tabs'
import { MessagePage } from '../pages/message/message'
import { HomePage } from '../pages/home/home'
import { StudentPage } from '../pages/student/student'
import { PunchCardPage } from '../pages/punch-card/punch-card'

import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'

import { PunchCardService } from '../providers/punch-card-service'
import { StudentService } from '../providers/student-service'


const components = [
  MyApp,
  MessagePage,
  HomePage,
  PunchCardPage,
  StudentPage,
  TabsPage
]

const providers = [
  StudentService,
  PunchCardService,
  StatusBar,
  SplashScreen,
  { provide: ErrorHandler, useClass: IonicErrorHandler }
]

@NgModule({
  declarations: components,
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: components,
  providers: providers
})
export class AppModule { }