import { SaleService } from './../../shared/service/sale.service';
import { PurchaseItemService } from './../../shared/service/purchase-item.service';
import { Component, OnInit } from '@angular/core';
import { PurchaseItem } from 'src/app/shared/model/purchese-item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-item',
  templateUrl: './purchase-item.component.html',
  styleUrls: ['./purchase-item.component.css']
})
export class PurchaseItemComponent implements OnInit {

  purchaseItems: PurchaseItem[]

  constructor(private purchaseItemService: PurchaseItemService) { }

  ngOnInit(): void {
    this.purchaseItemService.getAll().subscribe((data) => {
      this.purchaseItems = data;
    })
  }

  deleteProduct(id: number): void{
    try{
      this.purchaseItemService.delete(id).subscribe()
      location.reload();
    } catch (error) {
      alert("Parece que houve um erro.");
    }
  }
}
