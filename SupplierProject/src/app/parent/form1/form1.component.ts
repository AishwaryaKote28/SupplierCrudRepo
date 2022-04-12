import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {
  @Output() public send=new EventEmitter<string>();
  //notify:EventEmitter<string>=new EventEmitter<string>(); 

  addtext(list1:string){
    //this.notify.emit("hygf")
    this.send.emit(list1);
    console.log(list1)
  }
  // @Output()
  constructor() { }

  ngOnInit(): void {
  }

}
