import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {


  @Input()
  name:string = '';
  text:string = '';
  date:string = '';

  @Output()
  onKeyUp = new EventEmitter<{date:Date, text:string, name:string}>();

  enterNote($event:any){
  
    if(this.name == ""|| this.text =="" || this.date == "")
    return;

    let noteData:any = {name:this.name,text:this.text, data:this.date};
    console.log(noteData)
    this.onKeyUp.emit(noteData);

  this.name = '';
  this.text = '';
  this.date = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
