import { Component, OnInit } from '@angular/core';
import {TesteService} from  '../teste.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-editanimal',
  templateUrl: './editanimal.component.html',
  styleUrls: ['./editanimal.component.css']
})
export class EditanimalComponent implements OnInit {
animal:any;
id:any;
nome:any;
  constructor(public service:TesteService,private route: ActivatedRoute) { }

  ngOnInit() {
     this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.id = params.get('id'))


    );
  this.MostrarAnimalForId();
  }
  MostrarAnimalForId(){

   this.service.GetAnimalsforID(localStorage.getItem("id")).subscribe(
    data => {

    this.animal = JSON.parse(data['_body']);
    console.log(this.animal);
    this.nome = this.animal.nome;
    }
    );
    }
    editAnimal() {
      if(this.nome == undefined){
      alert("Digite o nome")
    }else{
     this.service.editAnimal(localStorage.getItem("id"),"nome="+this.nome)
    .subscribe(
    data=>{


  alert("Atualização realizada");


    }

    );
  }
    }
}
