import { Shopping } from './../../interfaces/shopping.interface';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { CartService } from './../../services/cart.service';
import { GoodsService } from './../../service/goods.service';
import { good } from './../../interfaces/good.interface';
import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewChecked {
  goods: good[] = []
  goodsObservable: Subscription
  add: number = -1
  cart: Shopping[] = []

  constructor(private gs: GoodsService, private cs: CartService, private as: AuthService, private router: Router) {

  }
  ngAfterViewChecked() {
    // console.log(this.as.userId);

    this.cs.getCart().subscribe(cart => {
      this.cart = cart.map(shop => {
        return {
          id: shop.payload.doc.id,
          ...shop.payload.doc.data()
        }
      })




    })
  }
  ngOnInit() {


    this.goodsObservable = this.gs.getAllGoods().subscribe(data => {
      this.goods = data.map(element => {
        return {
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        }
      }


      )
    })


  }
  ngOnDestroy() {
    this.goodsObservable.unsubscribe
  }
  addToCart(index) {
    this.add = +index
    let ncart: Shopping[] = []
    // ncart.push(this.cart[0])
    // let i = 0
    // for (const item of this.cart) {
    //   i++
    //   let c = 0

    //   for (const nitem of ncart) {
    //     console.log(nitem.name + "+++++++++" + item.name)

    //     if (nitem.name == item.name) {
    //       this.cs.save(this.cart[i], nitem.amount, nitem.stock)
    //       this.cs.delete(i)
    //       c = 1
    //       break
    //     }

    //   }
    //   if (c == 0) {
    //     ncart.push(item)
    //   }
    // }
    // console.log(ncart);

  }
  // addToCart(data: Good) {
  //   // return this.fs.collection('user/'+this.as.userId+'/cart')
  //   return this.fs.collection(`user/${this.as.userId}/cart`).add(data)
  // }
  buy(amount: number) {
    this.as.user.subscribe(user => {
      if (!user) {
        this.router.navigate(['/login'])
        return
      }
    }
    )









    let selectedGood = this.goods[this.add]
    for (const item of this.cart) {

      if (selectedGood.name === item.name) {
        window.alert("sorry you alrady added " + selectedGood.name + " to your cart !!")
        this.add = -1
        return

      }

    }
    if (amount > selectedGood.stock) {
      window.alert("you can't buy al this shits, there is only " + selectedGood.stock + " on the stock")
      this.add = -1
      return
    }


    let data = {
      name: selectedGood.name,
      amount: +amount,
      price: selectedGood.price,
      stock: selectedGood.stock
    }
    this.cs.addToCart(data).then(() => this.add = -1).catch(err => console.log(err)
    )
  }
}
