import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-one',
  templateUrl: './task-one.component.html',
  styleUrls: ['./task-one.component.css']
})
// export class TaskOneComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

export class TaskOneComponent {
  constructor() { 
 
    }
  tempMessage = '';

myArray=[];
  onClickMe() {
   
    for (var _i = 1; _i <= 100; _i++) {
      if(_i % 3 == 0 && (!(_i % 3 == 0 && _i % 5 == 0))){
        this.tempMessage = 'Eagle';
        this.myArray.push(this.tempMessage);
      }
      if(_i % 5 == 0 && (!(_i % 3 == 0 && _i % 5 == 0))){
        this.tempMessage = 'Creek';
        this.myArray.push(this.tempMessage);
      }
      if(_i % 3 == 0 && _i % 5 == 0){
        this.tempMessage = 'Eagle Creek';
        this.myArray.push(this.tempMessage);
      }else{
        this.myArray.push(_i);
      }      
    }
  
    
  }
}