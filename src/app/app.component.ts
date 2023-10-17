import { Component,OnDestroy } from '@angular/core';
import { MenuService } from './shared/components/services/menu/menu.service';
import { Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  title = 'starlight-angular';
  toggle!:boolean;
  constructor(
    private menu:MenuService,
    private router:Router
  ){
    menu.toggleSubject.subscribe(value=>{
      this.toggle = value;
      console.log('====================================');
      console.log(value);
      console.log('====================================');
    })
  }
     ///////////// Method to help Activate the Tab ////////////
     isActive(route:string):boolean{
      return this.router.isActive(route, false)
  }

  ngOnDestroy(): void {
    this.menu.toggleSubject.unsubscribe()
  };
 
}
