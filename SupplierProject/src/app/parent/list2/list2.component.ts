import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.scss']
})
export class List2Component implements OnInit {

list2:any[]=[]
@Input() parentchild1!:string
  constructor() { }

  ngOnInit(): void {
  }
  
  ngOnChanges():void{
    
  this.list2.push(this.parentchild1);
  //console.log("####",this.parentchild1)
  }


}
