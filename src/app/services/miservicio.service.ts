import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiservicioService {
  message='Hola Mundo'
  private observableLifeCycle= new Observable((observer)=>{
    try{
      observer.next('HOLA SOY EL VALOR NUMERO 1');
      observer.next('HOLA SOY EL VALOR NUMERO 2');
      observer.next('HOLA SOY EL VALOR NUMERO 3');
      throw({message: 'Bad request error 404'});
    }
    catch(error){
      observer.error(console.log(error));
    }
    observer.complete();
  })
  constructor() { }

  checkObservable():Observable<any>{
    return this.observableLifeCycle;
  }

  retornar(){
    return [
      {
        nombre:'Ricardo',
        apellido: 'Galan'
      },
      {
        nombre: 'Mariela',
        apellido: 'Galan'
      },
      {
        nombre: 'Jose',
        apellido: 'Gonzalez'
      }
    ]
  }
}
