import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(private alCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }
  alert(message: string) {
    this.alCtrl.create({
      title: 'Info',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  @ViewChild('username') uname;
  @ViewChild('password') pass;
  login() {
    this.fire.auth.createUserWithEmailAndPassword(this.uname.value, this.pass.value)
      .then(data => {
        console.log('got data', data);
      })
      .catch(error => {
        console.log('error', error);
        this.alert('Oops! Check your details.');
      })

    this.navCtrl.push(LoginPage);
  }
}
