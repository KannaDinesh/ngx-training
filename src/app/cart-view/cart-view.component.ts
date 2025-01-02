import {afterNextRender, afterRender, Component} from '@angular/core';
import {LicensePlate} from '../license-plate';
import {CartService} from '../cart.service';
import {NgFor, NgIf} from '@angular/common';
import {JumbotronComponent} from '../jumbotron/jumbotron.component';
import {LicensePlateComponent} from '../license-plate/license-plate.component';

@Component({
  selector: 'app-cart-view',
  standalone: true,
  imports: [NgFor, NgIf, JumbotronComponent, LicensePlateComponent],
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent {

  cartContents: LicensePlate[] = [];

  constructor(private service: CartService) {
    service.getCartContents().subscribe(data => this.cartContents = data);

    // Runs after every render
    afterRender(() => {
      document.title = `Your Cart ${this.cartContents.length} items`;
    })

    // Runs after first render
    afterNextRender(() => {
      document.title = 'Your cart - Empty';
    })
  }

  removeFromCart(plate: LicensePlate): void {
    // TODO
  }

}
