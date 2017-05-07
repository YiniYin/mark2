import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'
import { Batch } from '../../providers/batch'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController, private batch: Batch) {
  }

  ngOnInit() {
    this.batch.get<any>()
      .then(res => {
        let b = res
      })
  }

  getItems(e: any) {

  }
}
