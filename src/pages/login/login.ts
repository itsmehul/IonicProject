import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { EventsPage } from '../events/events';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController,
    public alCtrl: AlertController,
    private fire: AngularFireAuth) {
  }

  alert(message: string) {
    this.alCtrl.create({
      title: 'Info',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  @ViewChild('username') uname;
  @ViewChild('password') pass;
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  openEventsPage() {
    this.fire.auth.signInWithEmailAndPassword(this.uname.value, this.pass.value)
      .then(data => {
        console.log('data:', data);
        let toast = this.toastCtrl.create({
          message: this.uname.value + ' is logged in',
          duration: 3000
        });
        toast.present();
        this.navCtrl.setRoot(EventsPage);
      })
      .catch(error => {
        console.log('error', error);
        this.alert('Oops! Check your details.');
      })
  }
}
