import { Component, Renderer2 } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { SharedService } from '../../../shared/services/shared/shared.service';
import { RouterLink } from '@angular/router';
import { NgClass, NgStyle } from '@angular/common';
import { FilterPipe } from '../../../shared/pips/filter.pipe';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { ProductsComponent } from "../products/products.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, RouterLink, NgClass, NgStyle, FilterPipe, FormsModule, TranslateModule, ProductsComponent],
  templateUrl:'./home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  searchTerm: string = '';

  constructor(public sharedService:SharedService ,private renderer: Renderer2,private toastr: ToastrService) {}

  ngOnInit(): void {
  if(typeof localStorage !== 'undefined'){
    localStorage.setItem("currentPage",'/home')
  }
  // this.sharedService.fetchProducts(this.searchTerm);
  // this.sharedService.fetchWishlist();
 }


 customOptions: OwlOptions = {
  loop: true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    },
    1200: {
      items: 6 
    }
  },
  nav: true,
  rtl: true
}

}
