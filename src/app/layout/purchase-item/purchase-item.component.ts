import { Product } from './../../shared/model/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-purchase-item',
  templateUrl: './purchase-item.component.html',
  styleUrls: ['./purchase-item.component.css']
})
export class PurchaseItemComponent implements OnInit {

  products: Product[]
  displayedColumns = ['id', 'name', 'price', 'action']
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe((data) => {
      this.products = data;
    })
  }

}
