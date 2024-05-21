import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor() { }
  getInvoices(){
    return [
      { challanNumber: '1221' , dueDate: new Date() , semester: '2nd' , term: 'Fall 2023' , scholarshipPercentage: '75 %' , tutionFee: 23542 , fine: 250 , payableAmount: 23792 , status: 'Paid' , printUrl: 'None' , paidDate: new Date() },
      { challanNumber: '1222' , dueDate: new Date() , semester: '3rd' , term: 'Spring 2024' , scholarshipPercentage: '75 %' , tutionFee: 23542 , fine: 0 , payableAmount: 23542 , status: 'Un-Paid' , printUrl: 'None' , paidDate: new Date() },
    ];
  }
}
