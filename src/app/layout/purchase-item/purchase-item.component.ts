import { Product } from './../../shared/model/product.model';
import { Component, OnInit } from '@angular/core';
import { PoliticalService } from 'src/app/shared/service/political.service';

@Component({
  selector: 'app-purchase-item',
  templateUrl: './purchase-item.component.html',
  styleUrls: ['./purchase-item.component.css']
})
export class PurchaseItemComponent implements OnInit {

  products: Product[]
  displayedColumns = ['id', 'name', 'price', 'action']
  constructor(private politicalService: PoliticalService) { }

  ngOnInit(): void {
    this.politicalService.getAll().subscribe((data) => {
      this.products = data;
    })
  }

}
