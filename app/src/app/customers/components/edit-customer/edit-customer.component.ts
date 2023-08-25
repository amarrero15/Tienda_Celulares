import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { DialogData } from '../customer-list/customer-list.component';
import { CustomerService } from '../../services/customer.service';
@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})

export class EditCustomerComponent implements OnInit {
  customerInfo={
    customerName:'',
    DNI:0,
    customerAddress:'',
    customerEmail:'',

  }
  constructor(public dialogRef: MatDialogRef<EditCustomerComponent>, private customerService:CustomerService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }

  ngOnInit(): void {
  }

  saveCliente(){
    this.customerService.updateCliente(this.data).subscribe(res=>{
      alert('Cliente Actualizado');
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
