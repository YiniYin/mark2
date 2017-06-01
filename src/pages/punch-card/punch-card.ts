import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'

import { PunchCardEntity } from '../../entities/punch-card-entity'
import { PunchCardService } from '../../providers/punch-card-service'

@IonicPage()
@Component({
  selector: 'page-punch-card',
  templateUrl: 'punch-card.html',
})
export class PunchCardPage {
  punchCardEntity: PunchCardEntity
  punchCards
  hours

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public punchCardSrv: PunchCardService) { }

  ionViewDidLoad() { }

  ngOnInit() {
    this.punchCardSrv.get()
      .then(punchCardEntity => {
        this.punchCardEntity = punchCardEntity

        this.punchCards = punchCardEntity.punchCards

        this.hours = punchCardEntity.hours
      })
  }
}
