import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerComponent } from './buyer/buyer.component';
import { SellerComponent } from './seller/seller.component';
import { AdminComponent } from './admin/admin.component';
import { BuyitemComponent } from './buyitem/buyitem.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { PaymentComponent } from './payment/payment.component';
import { AdditemComponent } from './additem/additem.component';
import { ViewitemsComponent } from './viewitems/viewitems.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddRemoveBuyerComponent } from './add-remove-buyer/add-remove-buyer.component';
import { AddRemoveSellerComponent } from './add-remove-seller/add-remove-seller.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
 {path:'buyer',component:BuyerComponent,children:[
   {path:'buyitem',component:BuyitemComponent},
   {path:'viewcart',component:ViewcartComponent},
   {path:'payment',component:PaymentComponent}
 ]},
 {path:'seller',component:SellerComponent,children:[{path:'additem',component:AdditemComponent},{path:'viewitems',component:ViewitemsComponent}]},
 {path:'admin',component:AdminComponent,children:[{path:'addcategory',component:AddCategoryComponent},{path:'add-remove-buyer',component:AddRemoveBuyerComponent},{path:'add-remove-seller',component:AddRemoveSellerComponent}]}
 ,{path:'',redirectTo:'login',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
