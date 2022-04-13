import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() ProductForm!: FormGroup

  constructor() { }

  ngOnInit(): void {
  }

  get ProductId() {
    const grp = this.ProductForm.get('product') as FormGroup;
    return grp.get('ProductId');

  }
  get ProductName() {
    const grp = this.ProductForm.get('product') as FormGroup;
    return grp.get('ProductName');

  }
  get UnitPrice() {
    const grp = this.ProductForm.get('product') as FormGroup;
    return grp.get('UnitPrice');

  }
}

