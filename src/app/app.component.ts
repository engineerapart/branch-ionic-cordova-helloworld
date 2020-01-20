import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.initializeBranch();
    });
  }

  initializeBranch() {
    // Branch initialization
    (window as any).Branch.initSession().then((data: any) => {
      if (data['+clicked_branch_link']) {
        // read deep link data on click
        alert('Deep Link Data: ' + JSON.stringify(data));
      } else {
        alert('Branch initialized without any data');
      }
    });
  }
}
