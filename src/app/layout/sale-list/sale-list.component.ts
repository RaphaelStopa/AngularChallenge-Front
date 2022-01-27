import { SaleService } from './../../shared/service/sale.service';
import { Component, OnInit } from '@angular/core';
import { Sale } from 'src/app/shared/model/sale.model';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.css']
})
export class SaleListComponent implements OnInit {

  purchaseItems: Sale[]

  constructor(private saleService: SaleService) { }

  ngOnInit(): void {
    this.saleService.getAll().subscribe((data) => {
      this.purchaseItems = data;
    });
  }

}
