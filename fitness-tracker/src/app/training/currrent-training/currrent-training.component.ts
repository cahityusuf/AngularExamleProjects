import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currrent-training',
  templateUrl: './currrent-training.component.html',
  styleUrls: ['./currrent-training.component.css']
})
export class CurrrentTrainingComponent implements OnInit {
progress =0;
timer:number=0;
  constructor() { }

  ngOnInit(): void {
    this.timer=setInterval(()=>{
      this.progress=this.progress+5;
      if(this.progress>=100){
        clearInterval(this.timer)
      }
    },1000)
  }

  onStop(){
    clearInterval(this.timer);
  }

}
