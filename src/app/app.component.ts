import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, scan } from 'rxjs';
import { MiservicioService } from './services/miservicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'serviciosrxjs';
  arr:any=[];
  message:string;
  @ViewChild('myButton') button:ElementRef;
  constructor(private miServicio:MiservicioService){

  }

  ngOnInit(): void {
   /* let count=0;
   let button = document.querySelector('button');
    button?.addEventListener('click', ()=>{
      console.log(`Button was clicked by Javascript ${count++} times`)
    })*/
    this.checkReturnObservable();
  }

  ngAfterViewInit(){
   /* let count=0;
    fromEvent(this.button.nativeElement, 'click')
    .pipe(
      scan((count)=>count+1,0)
    )
    .subscribe(
      (count)=>console.log(`Button was clicked by RXJS siendo una funcion pura ${count} times`)
    )*/
  }

  checkReturnObservable(){
    this.miServicio.checkObservable().subscribe(
      (val)=>{
        console.log(val);
      }
    );
  }
}
