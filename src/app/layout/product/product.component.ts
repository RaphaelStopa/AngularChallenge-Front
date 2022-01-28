import { PurchaseItemService } from './../../shared/service/purchase-item.service';
import { Product } from '../../shared/model/product.model';
import { ProductService } from '../../shared/service/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account/shared/account.service';

@Component({
  selector: 'app-political',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class PoliticalComponent implements OnInit {

  products: Product[];
  auth = ''

  constructor(public productService: ProductService,  private router: Router, private purchaseItemService: PurchaseItemService, private accountService: AccountService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe((data) => {
      this.products= data;
    })
    this.auth = this.accountService.getAuth();
  }

  async addProductItem(quanti:number, product: Product) {
    try{
    this.purchaseItemService.addPurchaseItem(quanti, product);
    await new Promise(r => setTimeout(r, 1000));
    this.router.navigate(['/carrinho']);
    } catch (error) {
      alert("Parece que houve um erro. Verifique o campo da quantidade.");
    }
  }

}
