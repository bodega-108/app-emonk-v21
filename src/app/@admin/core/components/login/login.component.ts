import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router  } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formlogin : FormGroup;
  constructor(private CookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.formularioLogin();
  }

  formularioLogin(){
    this.formlogin = new FormGroup({
      user: new FormControl ('',[Validators.required]),
      password: new FormControl ('',[Validators.required]),
    });

    this.formlogin.valueChanges.subscribe(data => {
      console.log(data);
    });
  }

  iniciarSesion(){
    console.log('gooo');
    let datos = this.formlogin.value;
    this.CookieService.set('password',datos.password, 4, '/');
    
    this.router.navigate(['/admin']);
  }
}
