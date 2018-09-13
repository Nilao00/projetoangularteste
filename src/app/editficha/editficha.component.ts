import { Component, OnInit } from '@angular/core';
import {TesteService} from  '../teste.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-editficha',
  templateUrl: './editficha.component.html',
  styleUrls: ['./editficha.component.css']
})
export class EditfichaComponent implements OnInit {
  ficha:any;
  id:any;
  status:any;
  id_animal:any;
  obs:any;
  animal:any;
  nome:any;
  ischecked:boolean;
  constructor(public service:TesteService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.MostrarFichaForId();
    this.ischecked;
  }
  MostrarFichaForId(){

   this.service.GetfichaforID(localStorage.getItem("id")).subscribe(
    data => {

    this.ficha = JSON.parse(data['_body']);
    console.log(this.ficha);
    this.status = this.ficha.status;

    this.id_animal = this.ficha.id_animal;
    this.obs = this.ficha.obs;
    this.MostrarAnimalForId(this.id_animal);

    }
    );
    }
    MostrarAnimalForId(id){

     this.service.GetAnimalsforID(id).subscribe(
      data => {

      this.animal = JSON.parse(data['_body']);
      console.log(this.animal);
      this.nome = this.animal.nome;
      }
      );
      }
    editAnimal() {

     this.service.editAnimal(localStorage.getItem("id"),"status="+this.status+"&id_animal="+this.id_animal+"&obs="+this.obs)
    .subscribe(
    data=>{


  alert("Atualização realizada");


    }

    );

    }
}
