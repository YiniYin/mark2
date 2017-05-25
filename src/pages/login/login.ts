import { Component } from '@angular/core'
import { Platform, NavController } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  constructor(
    navCtrl: NavController,
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen) {

    statusBar.styleDefault();
    splashScreen.hide();
    
  }


  ngOnInit() {

  }
}
