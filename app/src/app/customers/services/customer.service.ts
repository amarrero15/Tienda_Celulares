import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  API_URI = environment.TIENDAAPI;
  constructor(private http:HttpClient) { }

  addCliente(customer: any){
    return this.http.post(`${this.API_URI}/clientes`, customer);
  }

  getClientes(){
    return this.http.get(`${this.API_URI}/clientes`);
  }

  deleteCliente(idCliente:any){
    return this.http.delete(`${this.API_URI}/clientes/${idCliente}`);
  }

  updateCliente(customer:any){
    return this.http.put(`${this.API_URI}/clientes`, customer)
  }
}
