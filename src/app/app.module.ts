import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EventsPage } from '../pages/events/events';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';

const firebaseAuth={
  apiKey: "AIzaSyCGBvOpw_r-ZdfJMAPEN1EP65hCmf2Zz8M",
  authDomain: "dotcomclub-a2d06.firebaseapp.com",
  databaseURL: "https://dotcomclub-a2d06.firebaseio.com",
  projectId: "dotcomclub-a2d06",
  storageBucket: "dotcomclub-a2d06.appspot.com",
  messagingSenderId: "456796701328"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventsPage,
    RegisterPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventsPage,
    RegisterPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
