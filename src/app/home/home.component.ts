import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import {TesteService} from  '../teste.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
animal:any[]=[];
ficha:any[]=[];
arr=[];
  constructor(public rt:Router,public service:TesteService) {
    this.MostrarAnimal();
     this.MostrarFicha();

  }

  ngOnInit() {

  }
 goCadFicha(){
  this.rt.navigate(['cadficha']);
 }
 goEditFicha(id){
   localStorage.setItem("id",id);
   this.rt.navigate(['editficha']);

}
 goCadAnimal(){
  this.rt.navigate(['cadanimal']);
 }
 goEditAnimal(id){
   localStorage.setItem("id",id);
  this.rt.navigate(['editanimal']);
 }
 MostrarAnimal(){

  this.service.GetAnimals().subscribe(
   data => {

   this.animal = JSON.parse(data['_body']);
   console.log(this.animal);
   }
   );
   }
   deleteAnimal(id){
   this.service.deleteAnimal(id)
  .subscribe(
  data=>{
   alert("Exclusao ok");
  }

  );


 }
 deleteFicha(id){
 this.service.deleteFicha(id)
.subscribe(
data=>{
 alert("Exclusao ok");
 this.MostrarAnimal();
}

);


}
   MostrarFicha(){

    this.service.GetFichas().subscribe(
     data => {
     this.ficha = JSON.parse(data['_body']);
      console.log(this.ficha);

     },
     err => console.log(err)
     );
     }
}
