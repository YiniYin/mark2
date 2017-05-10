import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'
import { ToastController } from 'ionic-angular'

import { BatchService } from '../../providers/batch-service'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  items = []

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    private batchService: BatchService) { }

  showHelpHint() {
    let toast = this.toastCtrl.create({
      message: `let me know if you need help navigating around here.`,
      duration: 5000,
    })

    toast.present()
  }

  ngOnInit() {
    this.batchService.get<any>()
      .then(res => {
        this.items = res.batch
      })

    this.showHelpHint()
  }
}
