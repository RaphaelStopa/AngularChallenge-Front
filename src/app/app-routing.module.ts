import { SaleListComponent } from './layout/sale-list/sale-list.component';
import { SaleComponent } from './layout/sale/sale.component';
import { AddProductComponent } from './layout/add-product/add-product.component';
import { PurchaseItemComponent } from './layout/purchase-item/purchase-item.component';
import { BaseComponent } from './layout/base/base.component';
import { PoliticalComponent } from './layout/product/product.component';
import { AuthGuard } from './account/shared/auth.guard';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { LoginComponent } from './account/login/login.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: BaseComponent, children:[
    {path: '', component: PoliticalComponent},
    {path: 'add-produtos', component: AddProductComponent},
    {path: 'historico', component: SaleListComponent},
    {path: 'carrinho', component: PurchaseItemComponent},

  ],
  canActivate: [AuthGuard]},
  {path:'', component: AuthenticationComponent, children: [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'create-account', component: CreateAccountComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
