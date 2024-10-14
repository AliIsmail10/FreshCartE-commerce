import { Component, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgStyle } from '@angular/common';
import { FilterPipe } from '../../../shared/pips/filter.pipe';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedService } from '../../../shared/services/shared/shared.service';
import { ToastrService } from 'ngx-toastr';
import { SliderComponent } from '../../additions/slider/slider.component';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, NgClass, NgStyle, FilterPipe, FormsModule, TranslateModule,SliderComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductsComponent implements OnInit {
  searchTerm: string = '';
  isHomePage: boolean = false;

  constructor(public sharedService: SharedService,private router:Router, private renderer: Renderer2,private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    localStorage.setItem('currentPage', '/products');
    this.sharedService.fetchProducts(this.searchTerm);
    this.sharedService.fetchWishlist();
    this.isHomePage = this.router.url === '/home';
  }

  addProductToCart(productId: string) {
    this.sharedService.addProductToCart(productId);
  }

  private debounceToggleWishlist: boolean = false;

toggleWishlist(productId: string, event: Event) {
  if (this.debounceToggleWishlist) return;
  this.debounceToggleWishlist = true;
  setTimeout(() => this.debounceToggleWishlist = false, 500); // Adjust debounce time as needed

  this.sharedService.toggleWishlist(productId);
  const iconElement = event.currentTarget as HTMLElement;
  const isInWishlist = this.sharedService.isProductInWishlist(productId);
  
  if (isInWishlist) {
    this.renderer.setStyle(iconElement, 'color', 'red');
    this.toastr.error('Product remove to wishlist', 'Success');
  } else {
    this.renderer.removeStyle(iconElement, 'color');
    this.toastr.success('Product added from wishlist', 'Success');
  }
}


  
 
}
