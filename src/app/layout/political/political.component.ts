import { Product } from './../../shared/model/product.model';
import { ProductService } from '../../shared/service/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-political',
  templateUrl: './political.component.html',
  styleUrls: ['./political.component.css']
})
export class PoliticalComponent implements OnInit {
  politicst: Product[];


  constructor(public productService: ProductService,  private router: Router,) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe((data) => {
      this.politicst = data;
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
