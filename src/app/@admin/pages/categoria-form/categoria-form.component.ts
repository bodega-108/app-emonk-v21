import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.scss']
})
export class CategoriaFormComponent implements OnInit {

  public formctg: FormGroup;

  constructor() { }

  ngOnInit(): void {
    console.log("estamos en categoria")
    this.formulario();
  }
  formulario(){
    
    this.formctg = new FormGroup({
      nombre: new FormControl ('',[Validators.required]),
    });
  
    this.formctg.valueChanges.subscribe(data => {
      console.log(data);
    })
  }
}
