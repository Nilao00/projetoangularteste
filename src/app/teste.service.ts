import {Http, Headers,Response,RequestOptions} from '@angular/http';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Observable,Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpRequest,HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TesteService {

  constructor(public http: Http,public http1:HttpClient) {
  //  this.GetAnimals();
  }
  //cadastrar animal
  postAnimals(values: string): Observable<any>{

      let body =  values ;
      let headers = new HttpHeaders();
       headers = new HttpHeaders({'Content-Type': 'raw'});

      return this.http1.post('http://localhost:8080/testeapi/addAnimal' ,body,{responseType:"json",headers:headers});
    }
    //cadastrar fichas
postFichas(values: string): Observable<any>{

    let body =  values ;
      let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    //  let options = new RequestOptions({headers: headers});
      return this.http1.post('http://localhost:8080/testeapi/addFichas' ,body,{responseType:"json",headers:headers});
}

//editar fichas
editFichas(values: string,id): Observable<any>{

let body =  values ;
  let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  let options = new RequestOptions({headers: headers});
  return this.http.put('http://localhost:8080/testeapi/updateFicha/'+id ,body,options).pipe(
            map(res => res.json()));
}
//editar animal
editAnimal(id,values: string): Observable<any>{

let body =  values ;
  let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  let options = new RequestOptions({headers: headers});
  return this.http.put('http://localhost:8080/testeapi/updateAnimal/'+id ,body,options).pipe(
            map(res => res.json()));
}
//deletar animal
deleteAnimal(id): Observable<any>{


  let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  let options = new RequestOptions({headers: headers});
  return this.http.delete('http://localhost:8080/testeapi/deleteAnimal/'+id ,options).pipe(
            map(res => res.json()));
}
//deletar ficha
deleteFicha(id): Observable<any>{


  let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  let options = new RequestOptions({headers: headers});
  return this.http.delete('http://localhost:8080/testeapi/deleteFicha/'+id ,options).pipe(
            map(res => res.json()));
}
//mostrar ficha
  GetFichas(){
  let headers = new Headers();
   headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

  let options = new RequestOptions({headers: headers});

  return this.http.get('http://localhost:8080/testeapi/ficha');
  }
//mostrar animal
    GetAnimals(){
    let headers  = new HttpHeaders();

  headers = new HttpHeaders({'Content-Type':"application/x-www-form-urlencoded"});

    return this.http.get('http://localhost:8080/testeapi/animal');
    }

    //mostar animal por id
    GetAnimalsforID(id){
    let headers  = new HttpHeaders();

  headers = new HttpHeaders({'Content-Type':"application/x-www-form-urlencoded"});

    return this.http.get('http://localhost:8080/testeapi/animal/'+id);
    }
    //mostar ficha por id
    GetfichaforID(id){
    let headers  = new HttpHeaders();

  headers = new HttpHeaders({'Content-Type':"application/x-www-form-urlencoded"});

    return this.http.get('http://localhost:8080/testeapi/ficha/'+id);
    }

}
