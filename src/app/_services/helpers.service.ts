
import { Injectable } from '@angular/core';
import { LoadingController, LoadingOptions } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class HelpersService {
    private isLoading: boolean = false;
    private loading: any | null;
  constructor(
    private loader:LoadingController
  ) { }


  async showLoading(message:any = null):Promise<void>{
    if(this.isLoading) return;
    this.isLoading =true;
    const options:LoadingOptions= {
      cssClass:'loadingStyle',
      showBackdrop:true,
      translucent:true,
      animated:true,
      // mode:'ios',
      spinner:'circular'
    }
    this.loading = await this.loader.create(options);
    await this.loading.present();
  }
  ///////////////////////////////////////////////////////////////
async dismissLoading():Promise<void>{
    await this.loading?.dismiss();
  }
}
