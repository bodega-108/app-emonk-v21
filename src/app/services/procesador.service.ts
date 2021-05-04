import { Injectable } from '@angular/core';
import { InfoService } from './info.service';

@Injectable({
  providedIn: 'root'
})
export class ProcesadorService {

  public identificador:any;


  constructor(private EmonkService: InfoService) { }
  ultimo(sku:number[]){
    
    let ultimo =  Math.max(...sku);
    return ultimo; 
  }

  nuevo(idCategoria:number, lastNumber:number, tipo:string, variantes:number,identificador:number){
   
    console.log("tipo: " + tipo+" catedoria: " + idCategoria + " " + "ultimo numero: " + lastNumber + " variantes: " + variantes);

    let categoria = idCategoria;

    
    // this.getIdentificador(categoria);
    // let variante = 1;
    let contadorVariante = 0;
    let cantidad = lastNumber;
    let preDigito = "00000";
    let newSku;
    let newSkuConfig =[];
    let preVariante = "00";
    let testNewSku;

    if(variantes === null){
      variantes = 1;
    }

    if(tipo == "simple" ){

        switch(categoria){
        case 1:
          cantidad++;
          
        for(let i = 1; i <=variantes; i++){
          
          contadorVariante++;
          
          if(cantidad >=10){
            preDigito = "0000"
          }
          if(contadorVariante > 10){
            preVariante = "0";
          }
          //newSku = `9-${preDigito}${cantidad}-${preVariante}${[i]}`;

            newSku = `${identificador}-${preDigito}${cantidad}-${preVariante}${[i]}`;
            //console.log("El nuevo sku es " + testNewSku);
            newSkuConfig.push(newSku);      
        } 
     
                return newSkuConfig; 
             
                
            break;
        case 2:
          cantidad++;
          for(let i = 1; i <=variantes; i++){
          
            contadorVariante++;
            
            if(cantidad >=10){
              preDigito = "0000"
            }
            if(contadorVariante > 10){
              preVariante = "0";
            }
            newSku = `12-${preDigito}${cantidad}-${preVariante}${[i]}`;
            
            newSkuConfig.push(newSku);
          }        
                return newSkuConfig;   
          break;
      }
    }

    if(tipo == "configurable"){
      switch(categoria){
        case 1:
          cantidad++;
        for(let i = 0; i <=variantes; i++){
          
          contadorVariante++;
          
          if(cantidad >=10){
            preDigito = "0000"
          }
          if(contadorVariante > 10){
            preVariante = "0";
          }
          newSku = `9-${preDigito}${cantidad}-${preVariante}${[i]}`;
          
          newSkuConfig.push(newSku);
        }        
              return newSkuConfig;   
            break;
        case 2:
          cantidad++;
          for(let i = 0; i <=variantes; i++){
          
            contadorVariante++;
            
            if(cantidad >=10){
              preDigito = "0000"
            }
            if(contadorVariante > 10){
              preVariante = "0";
            }
            newSku = `12-${preDigito}${cantidad}-${preVariante}${[i]}`;
            
            newSkuConfig.push(newSku);
          }        
                return newSkuConfig;   
          break;
      }
    }
  }

  getIdentificador(idCategoria:number, lastNumber:number, tipo:string, variantes:number, identificadorRaiz:number){
      this.EmonkService.getIdentificador(idCategoria).subscribe(data=>{
        this.identificador = data.identificador[0].identificador_ctg;

        console.log(this.identificador);

       
      });
  }
}
