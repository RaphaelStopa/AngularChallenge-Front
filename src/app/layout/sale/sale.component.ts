import { SaleService } from './../../shared/service/sale.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  sale= {
    cep: '',
    value: '',
    validateZipCode: ''
  }

  constructor(private saleService:SaleService, private router: Router) { }

  ngOnInit(): void {
    this.saleService.getTotal().subscribe((data) => {
      this.sale.value = data;
    });
  }

  async onSubmit(){
    try{
      this.sale.cep = this.sale.cep.replace(/[^\d]+/g,'');
     await this.saleService.getValidateZipCode(this.sale.cep).subscribe((data) => {
       console.log(data)
        this.sale.validateZipCode = data;
        console.log(this.sale.validateZipCode)

        if(data) {
          alert("Compra salva e finalizada.")
          this.saleService.create(this.sale);
          this.router.navigate(['']);
        } else {
          alert("Cep inválido.")
        }
      });
    } catch (error){
      console.error(error);
    }
  }
}
