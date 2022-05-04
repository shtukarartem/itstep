import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserService } from '../core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  user:User = {} as User;
  signInForm:FormGroup;
  constructor(formBuilder:FormBuilder, private router: Router, private userService:UserService) { 
    this.signInForm = new FormGroup({
      "login":new FormControl("",[Validators.required]),
      "password":new FormControl("",[Validators.required])
    })
  }
userExist:boolean = true
  ngOnInit(): void {

  }
  
checkUser(){
  this.userService.signIn(this.signInForm.value.login, this.signInForm.value.password)
    this.signInForm.reset()
 

 
}

}
