import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Home } from 'src/app/_interfaces/home';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clickedIndex:any
  @ViewChild('swiper',{ static: false })
  swiperRef:ElementRef|undefined;
  swiper?:Swiper
  @ViewChild('swiper2',{ static: false })
  swiper2Ref:ElementRef|undefined;
  swiper2?:Swiper
  home!: any ;
  categories!:any[];
  products!:any[]
  constructor(
    private actRoute: ActivatedRoute
  ) { }
  ngOnInit() {
    this.actRoute.data.subscribe(data => {
      console.log('Check route resolver data')
       this.home=data['routeResolver']
       this.categories = this.home.categories_products;
       console.log('====================================');
       console.log(this.home.categories_products);
       console.log('====================================');
    })
  }

  slideConfig = { 
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, 
    // centerMode: true,
    // centerPadding: '30px',
    arrows: true,
    infinite: true,
    vertical: false, // Add this line to enable horizontal scrolling

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],};


// OS code
  /////////////////////////////////////////////////////////
  getData(){
     for (let category of this.categories){
        
        console.log('====================================');
        console.log('category:', category);
        console.log('====================================');
       }
  }
  swiperReady(){
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }
  swiper2Ready(){
    this.swiper2 = this.swiper2Ref?.nativeElement.swiper;

  }
  /////////////////////////////////////////////////////////

  goNext(){
    this.swiperRef?.nativeElement.swiper.slideNext(500);
  };
    /////////////////////////////////////////////////////////
  goBack(){
      this.swiperRef?.nativeElement.swiper.slidePrev(500);
  
    };  /////////////////////////////////////////////////////////

    goNext2(){
    this.swiper2Ref?.nativeElement.swiper.slideNext(500);
  };
    /////////////////////////////////////////////////////////
  goBack2(){
      this.swiper2Ref?.nativeElement.swiper.slidePrev(500);
  
    };
}
