import { PurchaseItemComponent } from './layout/purchase-item/purchase-item.component';
import { EditPoliticalComponent } from './layout/edit-political/edit-political.component';
import { PoliticalPartyComponent } from './layout/politicalParty/political-party.component';

import { AddPoliticalComponent } from './layout/add-political/add-political.component';
import { BaseComponent } from './layout/base/base.component';
import { PoliticalComponent } from './layout/political/political.component';
import { AuthGuard } from './account/shared/auth.guard';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { LoginComponent } from './account/login/login.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { HomeComponent } from './layout/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: BaseComponent, children:[
    {path: '', component: PoliticalComponent},
    {path: 'add-produtos', component: AddPoliticalComponent},
    {path: 'edit-politico/:id', component: EditPoliticalComponent},
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
