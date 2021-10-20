import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 import {MatSnackBar} from '@angular/material/snack-bar'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
form: FormGroup;
loading= false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) { 
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }
  
  ingresar(){
    
    const user = this.form.value.user;
    const password = this.form.value.password;

    console.log(user);
    console.log(password);

    if(user=="taliah" && password=="12345"){
      //redireccionamos al dashboard
      this.fakeLoading();

    } else {
      //mostramos mensaje de error
      this.error();
      this.form.reset();
    }
  }

  error(){
    this._snackBar.open('The username and/or the password introduced are incorrect! Try again.', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  fakeLoading(){
    this.loading=true;
    setTimeout(() => {
      //redireccionar al dashboard
      this.loading=false;
    }, 1500);
  }

}
