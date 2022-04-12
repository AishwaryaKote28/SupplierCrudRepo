import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  @Input() billingForm!: FormGroup
  // BillingForm=new FormGroup({
  //   address1:new FormControl('',[Validators.required]),
  //   address2:new FormControl(''),
  //   city:new FormControl(''),
  //   state:new FormControl(''),
  //   country:new FormControl(''),
  //   unitPrice:new FormControl(''),
  // });

  constructor() { }

  ngOnInit(): void {
  }

  get Address1() {
    const grp = this.billingForm.get('sBilling') as FormGroup;
    return grp.get('Address1');

  }
  get Address2() {
    const grp = this.billingForm.get('sBilling') as FormGroup;
    return grp.get('Address2');

  }
  get City() {
    const grp = this.billingForm.get('sBilling') as FormGroup;
    return grp.get('City');

  }
  get State() {
    const grp = this.billingForm.get('sBilling') as FormGroup;
    return grp.get('State');

  }
  get Country() {
    const grp = this.billingForm.get('sBilling') as FormGroup;
    return grp.get('Country');
    
  }
}


