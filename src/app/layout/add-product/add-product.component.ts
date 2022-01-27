import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product ={
    name:'',
    description:'',
    unitPrice:'',
    quantityStock:'',
    unitMeasurement:'',
    photo:''
  }


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  async onSubmit() {
      await this.productService.create(this.product);
      alert("Produto criado.");
  }
}
