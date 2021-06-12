import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from '../shared/models/stock-models';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

   readonly baseUrl = 'https://bootcampsantanderdio.herokuapp.com/bootcamp'

  constructor(private http: HttpClient) { }

  async getStocks(): Promise<Stock[]>{
     const url = 'https://bootcampsantanderdio.herokuapp.com/bootcamp/stock';
     //const url = `${this.baseUrl}/stock`
     return this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise();
  }

}
