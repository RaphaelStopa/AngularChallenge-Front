import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-add-political',
  templateUrl: './add-political.component.html',
  styleUrls: ['./add-political.component.css']
})
export class AddPoliticalComponent implements OnInit {

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
    try{
      const result = await this.productService.create(this.product);
    }catch (error) {
      console.error(error);
  }

}
}
