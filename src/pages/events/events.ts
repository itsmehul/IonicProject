import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  email: string='mehul';

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private fire:AngularFireAuth) {
  this.email=fire.auth.currentUser.email;
  }
  popThis(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

}
