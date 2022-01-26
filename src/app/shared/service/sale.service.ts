import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.prod';
import { Sale } from '../model/sale.model';


@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private http: HttpClient) { }

  async create(sale: any) {
    const result = await this.http.post<any>(`${environment.api}/sales`, sale).subscribe();
    return result;
  }

  public getTotal(): Observable<any> {
    return this.http.get<any>(`${environment.api}/sales-total`);
  }
}
