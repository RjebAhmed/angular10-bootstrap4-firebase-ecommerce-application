import { orderform } from './../../interfaces/orderform.interface';
import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { Shopping } from './../../interfaces/shopping.interface';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Shopping[] = []
  totale: number = 0
  order = false
  orders = []

  constructor(private cs: CartService) { }

  ngOnInit() {

    this.cs.getCart().subscribe(cart => {
      this.cart = cart.map(shop => {
        return {
          id: shop.payload.doc.id,
          ...shop.payload.doc.data()
        }
      })




    })
  }
  // for (const c of this.cart) {
  //   this.totale += c.price * c.amount
  // }
  delete(id) {
    this.cs.delete(this.cart[id].id)
    for (const c of this.cart) {
      this.totale += c.price * c.amount
    }
  }
  save(i) {
    // if (this.cart[i].amount === 0) {
    //   this.cs.delete(this.cart[i].id)
    //   return
    // }
    this.cs.save(this.cart[i].id, this.cart[i].amount, this.cart[i].stock)

    for (const c of this.cart) {
      this.totale += c.price * c.amount
    }

  }
  orderNow() {

    this.order = true
    console.log(this.cart);

  }
  confirm(f: NgForm) {
    let data: orderform = f.value
    this.cs.addToOrders(this.cart, data).then(data => console.log("hello")
    )
    for (const item of this.cart) {
      this.cs.delete(item.id)
    }
    this.cart = []
  }

}
