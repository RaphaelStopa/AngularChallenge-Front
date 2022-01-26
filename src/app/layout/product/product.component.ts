import { PurchaseItemService } from './../../shared/service/purchase-item.service';
import { Product } from '../../shared/model/product.model';
import { ProductService } from '../../shared/service/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-political',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class PoliticalComponent implements OnInit {

  products: Product[];

  constructor(public productService: ProductService,  private router: Router, private purchaseItemService: PurchaseItemService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe((data) => {
      this.products= data;
    })
  }

  addProductItem(quanti:number, product: Product): void {
    try{
    this.purchaseItemService.addPurchaseItem(quanti, product);
    alert("Produto adcionado ao carrinho.");
    } catch (error) {
      alert("Parece que houve um erro. Verifique o campo da quantidade.");
    }
  }

}
