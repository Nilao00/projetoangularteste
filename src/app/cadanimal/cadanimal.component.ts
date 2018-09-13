import { Component, OnInit } from '@angular/core';
import {TesteService} from  '../teste.service';

@Component({
  selector: 'app-cadanimal',
  templateUrl: './cadanimal.component.html',
  styleUrls: ['./cadanimal.component.css']
})
export class CadanimalComponent implements OnInit {
  nome:any;
  constructor(public service:TesteService) { }

  ngOnInit() {
  }
  postAnimal() {
    if(this.nome == undefined){
    alert("Digite o nome")
  }else{
   this.service.postAnimals("nome="+JSON.stringify(this.nome))
  .subscribe(
  data=>{


alert("cadastro realizado");


  }

  );
}
  }

}
