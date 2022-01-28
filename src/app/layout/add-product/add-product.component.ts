import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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
    description: '',
    unitPrice:'',
    quantityStock:'',
    unitMeasurement:'',

  }

  selectedFile = null;

  constructor(private productService: ProductService, private router:Router) { }

  ngOnInit(): void {
  }


  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  async onUpload() {
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    uploadImageData.append('name', this.product.name);
    uploadImageData.append('description', this.product.description);
    uploadImageData.append('unitPrice', this.product.unitPrice);
    uploadImageData.append('quantityStock', this.product.quantityStock);
    uploadImageData.append('unitMeasurement', this.product.unitMeasurement);
    this.productService.create(uploadImageData)
    alert('Produto criado.')
    this.router.navigate(['']);
  }
}
