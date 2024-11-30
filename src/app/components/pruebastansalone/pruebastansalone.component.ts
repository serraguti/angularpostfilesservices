import { Component, NgModule, OnInit } from '@angular/core';
import { ServicePersonas } from '../../services/service.personas';
import { Persona } from '../../models/persona';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ServiceComics } from '../../services/service.comics';
import { AppModule } from '../../app.module';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-pruebastansalone',
  templateUrl: './pruebastansalone.component.html',
  styleUrl: './pruebastansalone.component.css',
  standalone: true,
  providers: [ServicePersonas],
  imports: [NgFor, NgIf]
})


export class PruebastansaloneComponent implements OnInit {
  public personas!: Array<Persona>;

  constructor(private _service: ServicePersonas) {
    this.personas = new Array<Persona>();
  }

  ngOnInit(): void {
    this._service.getPersonas().subscribe(response => {
      console.log("leyendo");
      this.personas = response;
    })    
  }
}
