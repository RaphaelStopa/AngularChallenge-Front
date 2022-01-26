import { Product } from '../model/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor( private httpClient: HttpClient) { }

  public getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${environment.api}/products`);
  }

  create(product: any)  {
    const result = this.httpClient.post<any>(`${environment.api}/products`, product).subscribe();
    return result;
  }
}
