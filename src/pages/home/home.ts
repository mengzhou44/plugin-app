import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  showAlert(message) {
    let alert = this.alertCtrl.create({
      title: 'Info',
      subTitle: message,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  showLocation() {
    console.log('showLocation()');
    this.geolocation.getCurrentPosition().then((res) => {
      var location = `latitude: ${res.coords.latitude}, longitude: ${res.coords.longitude}`
      console.log('location: ', location);
      this.showAlert(location);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private geolocation: Geolocation) {

  }

}
