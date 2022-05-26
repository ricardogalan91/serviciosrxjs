import { Injectable } from '@angular/core';

@Injectable()
export class NewserviceService {
  message='Hola soy el nuevo servicio'
  constructor() { }

  retornar(){
    return this.message;
  }
}
