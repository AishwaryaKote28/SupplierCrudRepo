import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SupplierService } from 'src/app/Core/Service/supplier.service';
@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {
  supplierForm: FormGroup;
  billingForm: FormGroup;
  ProductForm: FormGroup;
  EditDetails: any;
  //router: any;
  // supplierServices: any;



  //  supplierForm=new FormGroup({
  //   id:new FormControl('',[Validators.required]),
  //   firstName:new FormControl('',[Validators.required]),
  //   lastName:new FormControl('',[Validators.required]),
  //   productId:new FormControl('',[Validators.required]),
  //   productName:new FormControl('',[Validators.required]),
  //   unitPrice:new FormControl('',[Validators.required]),
  // });

  constructor(private route:Router, private fb: FormBuilder, private supplierService: SupplierService) {

    this.billingForm = this.fb.group({
      Address1: ['', Validators.required],
      Address2: ['', Validators.required],
      City: ['', Validators.required],
      State: ['', Validators.required],
      Country: ['', Validators.required]
    });
    this.ProductForm = this.fb.group({
      //ProductId: ['', [Validators.required]],
      ProductName: ['', [Validators.required]],
      UnitPrice: ['', [Validators.required]],
    });
    this.supplierForm = this.fb.group({
      // SupplierId: [0, [Validators.required, Validators.minLength(3)]],
      Name: ['', [Validators.required]],
      product: this.ProductForm,
      sBilling: this.billingForm
    });
  }

  ngOnInit(): void {
    // this.getAllSupplier()
  }
  add() {
    // this.supplierForm.controls['firstNmae']
    console.log(this.supplierForm.value);
    this.supplierService.PostSupplier(this.supplierForm.value).subscribe((res: any)=>{
    console.log(res);
    //this.route.navigateByUrl('report')
    this.route.navigateByUrl('home/report')
    });
  }
  // update(id:any){
  //   this.supplierService.GetSupplierById(id).subscribe(res=>{
  //     this.EditDetails=res;
  //     if(this.EditDetails!=null){
  //       this
  //     }
  //   });
  // }
  get f() {
    return this.supplierForm.controls;
  }

}



