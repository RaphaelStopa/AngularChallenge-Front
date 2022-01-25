import { Product } from './../model/product.model';
import { ResponsePageablePolitical } from './../model/responsePageablePolitical.model';
import { Political } from './../model/political.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class PoliticalService {
  constructor( private httpClient: HttpClient) { }

  public getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${environment.api}/products`);
  }

  readById(id: number): Observable<Political> {
    const url = `${environment.api}/politicians/${id}`;
    return this.httpClient.get<Political>(url).pipe(
      map((obj) => obj)
    );
  }

  delete(id: number): Observable<Political> {
    const url = `${environment.api}/politicians/${id}`;
    return this.httpClient.delete<Political>(url).pipe(
      map((obj) => obj)
    );
  }

  async create(political: any) {
    const result = await this.httpClient.post<any>(`${environment.api}/products`, political).toPromise();
    return result;
  }

  update(political: Political): Observable<Political> {
    const url = `${environment.api}/politicians/${political.id}`;
    return this.httpClient.patch<Political>(url, political)
  }

}
