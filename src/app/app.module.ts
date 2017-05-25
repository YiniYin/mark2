import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http'
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular'
import { MyApp } from './app.component'

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic'
import { ItemDetailsPage } from '../pages/item-details/item-details'
import { ListPage } from '../pages/list/list'
import { TabsPage } from '../pages/tabs/tabs'
import { NotificationPage } from '../pages/notification/notification'
import { MessagePage } from '../pages/message/message'
import { HomePage } from '../pages/home/home'
import { StudentPage } from '../pages/student/student'
import { AttendencePage } from '../pages/attendence/attendence'

import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'

import { BatchService } from '../providers/batch-service'
import { StudentService } from '../providers/student-service'


const components = [
  MyApp,
  HelloIonicPage,
  ItemDetailsPage,
  ListPage,
  NotificationPage,
  MessagePage,
  HomePage,
  AttendencePage,
  StudentPage,
  TabsPage
]

const providers = [
  StudentService,
  BatchService,
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
