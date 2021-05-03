import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.infoEmonk;
   }

   getSkus(categoria:number):Observable<any>{

    return this.http.get(this.url +  `/api/productos/categoria/${categoria}`);
   }

   guardarSku(skus):Observable<any>{
    
    console.log('Iniciando servicio');
    console.log(skus);
     
    return this.http.post(this.url + `/api/productos/save`,skus,{})
   
  }

  getBuscador(data):Observable<any>{
    return this.http.get(this.url + `/api/productos/${data}`);
  }

  postUpdateSku(data):Observable<any>{
    return this.http.post(this.url + `/api/productos/update`,data,{})
  }

  //Datos para formulario

  getCategorias():Observable<any>{
    return this.http.get(this.url + `/api/productos/ctg`);
  }
  getClientes():Observable<any>{
    return this.http.get(this.url + `/api/productos/clientes`);
  }
  getKams():Observable<any>{
    return this.http.get(this.url + `/api/productos/kams`);
  }
  getIdentificador(id_ctg):Observable<any>{
    console.log(id_ctg);
    return this.http.get(this.url + `/api/productos/identificador/${id_ctg}`);
  }
}
