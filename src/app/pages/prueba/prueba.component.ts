import { Component, OnInit } from '@angular/core';
import {PruebaService} from "./prueba.service";

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  listUser = [];
  constructor(
    private pruebaService: PruebaService
  ) {
  }

  ngOnInit(): void {
    this.getUsers();
    this.getEmailUsers();
  }

  getEmailUsers(){
    this.pruebaService.getData("assets/data.json").subscribe(result => {
      result.forEach(function (element){
        console.log(element.email);
      })
    });
  }

  getUsers(){
    this.pruebaService.getData("assets/data.json").subscribe(result => {
      this.listUser = result;
    });
  }

}
