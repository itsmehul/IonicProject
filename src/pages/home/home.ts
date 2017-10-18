import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { EventsPage } from '../events/events';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('username') uname;
  @ViewChild('password') pass;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }


  openEventsPage() {
    let toast = this.toastCtrl.create({
      message: this.uname.value + ' is logged in',
      duration: 3000
    });
    toast.present();
    this.navCtrl.push(EventsPage);
  }

}
