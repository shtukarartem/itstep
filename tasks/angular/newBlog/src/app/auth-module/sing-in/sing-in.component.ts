import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserService } from 'src/app/core';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {
  users:User[] = [];
  signInForm:FormGroup;
  constructor(formBuilder:FormBuilder, private router: Router, private userService:UserService) { 
    this.signInForm = formBuilder.group({
      "login":["",[Validators.required, ]],
      "password":["",[Validators.required, ]]
    })
  }
userExist:boolean = true
  ngOnInit(): void {

  }
  
checkUser(){
  if(this.userService.singIn(this.signInForm.value.password,this.signInForm.value.login)){
    this.signInForm.reset()
     this.router.navigate(["/post"]);
     this.userExist = true
  } else this.userExist = false; 
  
}

}
