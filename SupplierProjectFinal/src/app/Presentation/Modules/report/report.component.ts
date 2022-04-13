import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../../../Core/Service/supplier.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
list:any=[] ;
dtOptions: DataTables.Settings = {};

  constructor(private supplierservice:SupplierService) { 
    // this.list=[];
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
     

    };

    this.supplierservice.GetSupplier().subscribe(res=>{
      console.log(res); 
      this.list=res;
      console.log(this.list);
    },
    err=>{
      alert(err.message);
     
    });
  }
  DeleteSupplier(supplierId: number) {
      this.supplierservice.DeleteSupplier(supplierId).subscribe(response => {
        console.log(response)
        this.ngOnInit();
      })   
    } 
  }


