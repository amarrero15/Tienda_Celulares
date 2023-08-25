import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CustomerService } from '../../services/customer.service';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';
export interface DialogData {
  customerName:string,
  DNI:number,
  customerAddress:string,
  customerEmail:string,
};
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  columns=['userName', 'dni', 'address', 'email', 'edit', 'delete'];
  customers:any;
  @ViewChild(MatTable) table1!:MatTable<any>;
  @ViewChild(MatPaginator, {static:true}) paginator!: MatPaginator;
  constructor(private customerService:CustomerService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(){
    this.customerService.getClientes().subscribe(res=>{
      this.customers=res;
    });
  }

  refresh(){
    this.getClientes();
  }

  editCustomer(customerInfo: any): void {
    const dialogRef = this.dialog.open(EditCustomerComponent, {
      data: {
        customerName: customerInfo.NombreCliente,
        DNI:customerInfo.CedulaCliente,
        customerAddress:customerInfo.DireccionCliente,
        customerEmail:customerInfo.EmailCliente},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  deleteCustomer(customer: any){
    this.customerService.deleteCliente(customer.CedulaCliente).subscribe(res=>{
      alert('Cliente Eliminado');
    })
    this.getClientes();
  }

}
