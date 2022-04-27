import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserService } from 'src/app/core';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {
  signUpForm:FormGroup;
  user: User = {} as User;
  users:User[] = [];
  constructor(formBuilder:FormBuilder,private userService:UserService, private router:Router) { 
    this.signUpForm = formBuilder.group({
      "name": ["",[Validators.required]],
      "login": ["",[Validators.required]],
      "password": ["",[Validators.required]]
    })
  }

  ngOnInit(): void {
    this.userService.get().subscribe(
      ((data) => this.users = data))
  }
  addUser(){
    if(this.signUpForm.invalid)
            return;
            
    let newUserId = this.userService.getNewUserId();
    this.user = {
      id: newUserId,
      name: this.signUpForm.controls["name"].value,
      login: this.signUpForm.controls["login"].value,
      password: this.signUpForm.controls["password"].value,
      role:"user"
    }
  
      
    
    let index:number = this.users.findIndex((item:User)=>{
      return this.user.login == item.login
    })
    if(index != -1){
        return
    }
    this.userService.signUp(this.user);
    this.signUpForm.reset();
    this.router.navigate(["/post"]);

  }

}
