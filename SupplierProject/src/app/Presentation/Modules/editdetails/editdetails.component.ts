import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from 'src/app/Core/Service/supplier.service';

@Component({
  selector: 'app-editdetails',
  templateUrl: './editdetails.component.html',
  styleUrls: ['./editdetails.component.scss']
})
export class EditdetailsComponent implements OnInit {
supplierForm:FormGroup
list={}
supplierId!:number
  constructor(private fb: FormBuilder, private service: SupplierService, private router:Router,  private route: ActivatedRoute) {
    
    this.supplierForm = this.fb.group({
     supplierId: [''],
     name: ['']    
    });
  }
   

  ngOnInit(): void {
    this.supplierId=Number(this.route.snapshot.paramMap.get('supplierId'))
    console.log(this.supplierId);
    this.service.GetSupplierById(this.supplierId).subscribe(a=>{
      console.log(a);
      this.list=a
      this.supplierForm.patchValue(this.list);
    })
  }
  Edit(){
    console.log(this.supplierForm.value)
    this.service.UpdateSupplier(this.supplierForm.value).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('home/report')
    })
  }
  get f() {
    return this.supplierForm.controls;
  }
}
