import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {
  @Output() public send2=new EventEmitter<string>();

  addtext2(list2:string){
    //this.notify.emit("gyt")
    this.send2.emit(list2);
    console.log("THIS IS FORM 2"+list2)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        