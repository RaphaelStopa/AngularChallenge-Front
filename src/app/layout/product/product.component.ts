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


  constructor(public productService: ProductService,  private router: Router,) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe((data) => {
      this.products= data;
    })
  }

  // image(photo: string) {
  //   var image = new Image();
  //   image.src = photo;
  //   return image
  // }

  // deleteProduct(id: number): void {
  //   this.politicalService.delete(id).subscribe(() => {
  //     this.router.navigate(["/politico"]);
  //   });
  // }
}
