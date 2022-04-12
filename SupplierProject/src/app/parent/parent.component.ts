import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
 name:boolean=false;
 name1:boolean=false;
 Data1="";
 Data2="";
 Data1List=""
 Data2List=""
 parentchild=""
 parentchild1=""
  constructor() { }

  ngOnInit(): void {
    }
  list1(){
    this.name1=false
    // console.log('###########')
    this.name=true
    
    }

 list2(){
      this.name=false
      this.name1=true
   }
send(Data1List:any)
{
  this.Data1=Data1List
  // this.Data1=this.Data1List
  this.parentchild=this.Data1
}
send2(Data2List:any)
{
  this.Data2=Data2List
  console.log("HIEFIUHEUIFH"+ this.Data2List)

  // console.log(this.Data2)
  this.parentchild1=this.Data2
}
  }


