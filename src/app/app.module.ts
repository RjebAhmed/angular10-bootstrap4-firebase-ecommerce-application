import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { GoodsComponent } from './components/goods/goods.component';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AngularFireModule } from "@angular/fire";
import { FormsModule } from "@angular/forms";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireStorageModule } from "@angular/fire/storage";

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    GoodsComponent,
    LoginComponent,
    SingupComponent,
    NotFoundComponentComponent,
    NavbarComponent,
    DashboardComponent,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule, AngularFireStorageModule, AngularFireAuthModule, AngularFirestoreModule,
    AppRoutingModule, FormsModule, AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyAj117ZZGH7joiqziby3f9ISLVp7vKwwv4",
        authDomain: "fstfb-d61ab.firebaseapp.com",
        databaseURL: "https://fstfb-d61ab.firebaseio.com",
        projectId: "fstfb-d61ab",
        storageBucket: "fstfb-d61ab.appspot.com",
        messagingSenderId: "99056861817",
        appId: "1:99056861817:web:017c4a964bc360c1b5caa8",
        measurementId: "G-43TXDEXJB2"
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
