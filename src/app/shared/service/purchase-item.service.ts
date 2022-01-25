import { Product } from './../model/product.model';
import { PurchaseItem } from './../model/purchese-item.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PurchaseItemService {

  constructor(private httpClient: HttpClient) { }
  newPurchase: PurchaseItem;

  addPurchase ={
    // id:'',
    productQuantity: 0,
    totalPrice:0,
    product: {id: 0},
    // sale: {id: undefined},
    finished: false,
  }

  public getAll(): Observable<PurchaseItem[]> {
    return this.httpClient.get<PurchaseItem[]>(`${environment.api}/purchase-items-by-user`);
  }

  delete(id: number): Observable<PurchaseItem> {
    const url = `${environment.api}/purchase-items/${id}`;
    return this.httpClient.delete<PurchaseItem>(url).pipe(
      map((obj) => obj)
    );
  }

  // addPurchaseItem(id: number): Observable<PurchaseItem> {
  //   const url = `${environment.api}/purchase-items`;
  //   return this.httpClient.post<PurchaseItem>(url)
  // }

  async addPurchaseItem(quantity: number, product: Product) {
    this.addPurchase.totalPrice =  product.unitPrice * quantity;
    this.addPurchase.productQuantity = quantity;
    this.addPurchase.product.id = product.id;
    this.addPurchase.finished = false;

    const result = await this.httpClient.post<any>(`${environment.api}/purchase-items`, this.addPurchase).subscribe();
    return result;
  }
}
