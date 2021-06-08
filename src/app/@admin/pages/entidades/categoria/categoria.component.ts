import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  formctg: FormGroup;

  public idt : any[];

  constructor(private EmonkService:InfoService) { }

  ngOnInit(): void {
    this.formulariocateforias();
    
  }

  formulariocateforias(){
  
    this.cargarIdentificadores();
    
    this.formctg = new FormGroup({
      nombre : new FormControl ('',[Validators.required]),
      identificadorCtg: new FormControl('',[Validators.required])
    });
  
    this.formctg.valueChanges.subscribe(data =>{
      console.log(data);
    });
  }

  guardarCategoria(event:Event){

    console.log(this.idt);
    let identification = this.formctg.value.identificadorCtg;
    const validacion = this.idt.filter( macht=> macht === identification);

    console.log(validacion);

    if(this.formctg.valid){
      
      if(validacion.length !== 0){
        
        console.log('Lo sentimos, el identificador introducido no esta disponble');
      }
      else{
        let categoria = this.formctg.value;
        console.log(categoria);
        this.EmonkService.postCategoria(categoria).subscribe(data => {
          console.log(data);
        });
      }
    }


  
  }

  cargarIdentificadores(){
    
    let idenficadores=[];
    this.EmonkService.getIdentificadores().subscribe(data => {
       let ultimosIdentificadores = data.identificadores;
     
      

      for(let i = 0; i < ultimosIdentificadores.length; i++) {
        
        idenficadores.push(data.identificadores[i].identificador_ctg);
      }
        

        this.idt = idenficadores; 
        
        console.log(this.idt);
    });
  }
  
}
