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
    console.log(sale)
    const result = await this.http.get<any>(`${environment.api}/sales`, sale).subscribe;
    console.log(result)
    return result;
  }

  // so para texte
  public getAll(): Observable<Sale[]> {
    return this.http.get<Sale[]>(`${environment.api}/sales`);
  }
}
