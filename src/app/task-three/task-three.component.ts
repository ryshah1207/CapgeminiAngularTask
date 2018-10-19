import { Component,Output,
  EventEmitter, OnInit } from '@angular/core';
  import * as saveAs from 'file-saver';

@Component({
  selector: 'app-task-three',
  templateUrl: './task-three.component.html',
  styleUrls: ['./task-three.component.css']
})
export class TaskThreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  @Output() onChange: EventEmitter<File> = new EventEmitter<File>();

  updateSource($event: Event) {
       this.projectImage($event.target['files'][0]);
  }

  
  source:string = '';
  projectImage(file: File) {
      let reader = new FileReader;
      reader.onload = (e: any) => {
           this.source = e.target.result;
          this.onChange.emit(file);
      };
      reader.readAsDataURL(file);
  }

rotationAmount = 0;
onRotate(){
  this.rotationAmount = this.rotationAmount +90;
  (<HTMLElement>document.querySelector('#img')).style.transform='rotate(' + this.rotationAmount + 'deg)';
}
saveImage() {
    saveAs("", 'newImage.jpg');
}

}
