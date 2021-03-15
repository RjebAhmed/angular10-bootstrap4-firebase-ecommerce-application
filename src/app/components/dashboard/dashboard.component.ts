import { CartService } from './../../services/cart.service';
import { GoodsService } from './../../service/goods.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  orders = []
  O = []
  constructor(private gs: GoodsService, private cs: CartService) {
    this.cs.getOrders().subscribe(data => this.orders = data)

  }

  @ViewChild('img') imgage: ElementRef
  ngOnInit() {



  }
  me() {

    for (const order of this.orders) {
      let test = []
      let t = []
      test.push(order["oform"])
      for (const O of order["data"]) {

        t.push(O)
      }
      test.push(t)
      this.O.push(test)
    }
    console.log(this.O);
    console.log(this.O[0][0]["name"]
    );
  }
  addNewGood(f: NgForm) {

    let data = f.value
    let name = data.name,
      price = data.price,
      image = (<HTMLInputElement>this.imgage.nativeElement).files[0]
    this.gs.addNewGood(name, price, image)
  }

}
