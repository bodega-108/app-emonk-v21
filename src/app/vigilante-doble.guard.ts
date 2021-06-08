import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router  } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class VigilanteDobleGuard implements CanActivate, CanActivateChild {
  constructor(private cookie:CookieService,private router: Router){

  }

  redireccion(flag:any){
    if(!flag){
      this.router.navigate(['/iniciarsesion']);
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let contraseña = this.cookie.get('password');
      this.redireccion(contraseña);
      if(contraseña === '1234'){
        return true;
      }else{
        return false;

      }
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
