import { Component, ComponentInterface, Host, h } from '@stencil/core';
import { alertController } from '@ionic/core';

@Component({
  tag: 'ionic-button',
})
export class IonicButton implements ComponentInterface {
  async openAlert(e: UIEvent) {
    console.log(e);
    const alert: HTMLIonAlertElement = await alertController.create({
      header: `Button Clicked!`,
      buttons: [
        {
          text: 'Ok',
          role: 'select',
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {},
        },
      ],
    });

    await alert.present();
  }

  render() {
    return (
      <Host>
        <ion-button onClick={(e: UIEvent) => this.openAlert(e)}>Open Alert</ion-button>
      </Host>
    );
  }
}
