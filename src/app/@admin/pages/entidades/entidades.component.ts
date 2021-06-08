import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-entidades',
  templateUrl: './entidades.component.html',
  styleUrls: ['./entidades.component.scss']
})
export class EntidadesComponent implements OnInit {
  formEntidades : FormGroup;

  public formularios:string;

  constructor() {
    this.formularios = 'categoria';
   }

  ngOnInit(): void {
    this.formularioEntidades();
  }

  formularioEntidades(){
    this.formEntidades = new FormGroup({
      nombre: new FormControl ('',[Validators.required]),
    });

    this.formEntidades.valueChanges.subscribe(data => {
      console.log(data);
    });
  }
}
