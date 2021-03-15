import { ItemDetailComponent } from './item-detail/item-detail.component';
import { Guards2Service } from './services/guards2.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GoodsComponent } from './components/goods/goods.component';
import { CartComponent } from './components/cart/cart.component';
import { SingupComponent } from './components/singup/singup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';
import { guardService } from './services/guards/guard.service';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate: [Guards2Service] },
  { path: 'singup', component: SingupComponent, canActivate: [Guards2Service] },
  { path: 'cart', component: CartComponent, canActivate: [guardService] },
  { path: 'admin', component: GoodsComponent },
  { path: '/:id', component: ItemDetailComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [guardService] },

  { path: '**', component: NotFoundComponentComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
