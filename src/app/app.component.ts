import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController } from 'ionic-angular';



import { HomePage } from '../pages/home/home';

//declare var Calculator: any;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;




  constructor(platform: Platform, statusBar: StatusBar,
    splashScreen: SplashScreen) {
    platform.ready().then(() => {
      /* 
            Calculator.add(3, 5, (result) => {
              console.log('3+5=', result);
            }) */


      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
