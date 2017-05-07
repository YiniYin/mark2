import { Component } from '@angular/core';

import { NotificationPage } from '../notification/notification';
import { MessagePage } from '../message/message';
import { HomePage } from '../home/home';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NotificationPage;
  tab3Root = MessagePage;

  constructor() {

  }
}
