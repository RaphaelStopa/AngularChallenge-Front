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

  public getAll(): Observable<PurchaseItem[]> {
    return this.httpClient.get<PurchaseItem[]>(`${environment.api}/purchase-items-by-user`);
  }

  delete(id: number): Observable<PurchaseItem> {
    const url = `${environment.api}/purchase-items/${id}`;
    return this.httpClient.delete<PurchaseItem>(url).pipe(
      map((obj) => obj)
    );
  }
}
