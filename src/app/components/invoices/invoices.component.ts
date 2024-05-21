import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { InvoiceService } from '../../services/invoice.service';
import { LoginService } from '../../services/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [NzIconModule , RouterModule , FormsModule , CommonModule , NzTableModule ,],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.scss'
})
export class InvoicesComponent implements OnInit , OnDestroy {

  columns: any[] = [
    {label: 'Sr.' , variable: 'Sr.' , width: '50px',class:'text-center'},
    {label: 'Challan ID' , variable: 'challanNumber' , width: '200px'},
    {label: 'Due Date' , variable: 'dueDate' , class: 'text-center' , width: '200px'},
    {label: 'Semester' , variable: 'semester' , class: 'font-semibold text-center' , width: '100px'},
    {label: 'Term' , variable: 'term' , class: 'font-semibold text-center' , width: '150px'},
    {label: 'Scholarship %' , variable: 'scholarshipPercentage' ,  class: 'text-center font-semibold' , width: '120px'},
    {label: 'Tuition Fee' , variable: 'tutionFee' ,  class: 'text-center font-semibold' , width: '150px'},
    {label: 'Fine' , variable: 'fine' ,  class: 'text-center font-semibold' , width: '100px'},
    {label: 'Payable Amount' , variable: 'payableAmount' ,  class: 'text-center font-semibold' , width: '150px'},
    {label: 'Status' , variable: 'status' ,  class: 'text-center' , width: '100px'},
    {label: 'Print' , variable: 'printUrl' ,  class: 'text-center' , width: '150px'},
    {label: 'Paid Date' , variable: 'paidDate' ,  class: 'text-center' , width: '150px'},
  ];
  invoicesData: any[] = [];
  subscription!: Subscription;
  tableWidth: any = false;
  constructor(
    private invoiceService: InvoiceService,
    private loginService: LoginService
  ){}

  ngOnInit(): void {
    this.getInvoicesData();
    this.subscription = this.loginService.actionObservable.subscribe(action => {
        this.tableWidth = action;
    });
  }

  getInvoicesData(){
    this.invoicesData = this.invoiceService.getInvoices();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
