import { orderform } from './../interfaces/orderform.interface';
import { Shopping } from './../interfaces/shopping.interface';
import { good } from './../interfaces/good.interface';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private fs: AngularFirestore, private as: AuthService) { }
  addToCart(data: good) {

    return this.fs.collection(`users/${this.as.userId}/cart`).add(data)
  }
  addToOrders(data: Shopping[], oform: orderform) {
    return this.fs.collection(`ordres`).add({ data, oform })
  }
  getOrders() {
    return this.fs.collection(`ordres`).valueChanges()

  }

  getCart() {
    return this.fs.collection(`users/${this.as.userId}/cart`).snapshotChanges()

  }

  // getOrders() {
  //   return this.fs.collection(`ordres`).snapshotChanges()

  // }
  delete(id) {
    return this.fs.doc(`users/${this.as.userId}/cart/${id}`).delete()
  }
  deletecart() {
    return this.fs.collection('users').doc(this.as.userId + 'cart').delete()

  }
  save(id, amount, stock) {
    if (amount > stock) {
      window.alert("you can't add all this shits");
      return;

    }
    stock -= amount
    this.fs.doc(`users/${this.as.userId}/cart/${id}`).update({ amount })

  }

}

