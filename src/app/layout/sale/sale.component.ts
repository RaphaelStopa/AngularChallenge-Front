import { Sale } from './../../shared/model/sale.model';
import { SaleService } from './../../shared/service/sale.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  sale: Sale[]

  constructor(private saleService:SaleService) { }

  ngOnInit(): void {
    this.saleService.getAll().subscribe((data) => {
      this.sale= data;
      console.log(this.sale)
    })
  }

  onSubmit(){
    try{
      this.saleService.create(this.sale);
    } catch (error){
      console.error(error);
    }
  }



}
