import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list1',
  templateUrl: './list1.component.html',
  styleUrls: ['./list1.component.scss']
})
export class List1Component implements OnInit {
list1:any[]=[]
@Input() parentchild!:string
  constructor() { }

  ngOnInit(): void {
  }
  
  ngOnChanges():void{
  this.list1.push(this.parentchild);
  }

}
