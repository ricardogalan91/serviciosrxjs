import { Component, OnInit } from '@angular/core';
import { MiservicioService } from '../services/miservicio.service';
import { NewserviceService } from '../services/newservice.service';
import { VALUE } from '../services/userValue';

@Component({
  selector: 'app-otrocomp',
  templateUrl: './otrocomp.component.html',
  styleUrls: ['./otrocomp.component.scss'],
  providers: [{provide:MiservicioService, useFactory:function(){
    if(VALUE.propertyOfValue){
      return NewserviceService
    }else{
      return VALUE
    }
  }}]
})
export class OtrocompComponent implements OnInit {
  message:string;
  constructor(private miServicio:MiservicioService) { }

  ngOnInit(): void {
  }



}
