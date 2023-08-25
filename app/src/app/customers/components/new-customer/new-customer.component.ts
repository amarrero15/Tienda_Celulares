import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {
  customerInfo={
    customerName:'',
    DNI:0,
    customerAddress:'',
    customerEmail:'',

  }
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
  }

  addCliente(){
    this.customerService.addCliente(this.customerInfo).subscribe(res=>{
      alert('Cliente agregado en el sistema');
    })
  }

}
