import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserService } from '../core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm:FormGroup;
  user:User = {} as User;



  constructor(private userService:UserService, private router:Router, private route: ActivatedRoute) { 
    this.route.data.subscribe(data =>{
      if(data["user"])
      this.user = data["user"]})
    this.profileForm = new FormGroup({
      "name": new FormControl(this.user.name,Validators.required),
      "login": new FormControl(this.user.login,Validators.required),
      "password": new FormControl(this.user.password, Validators.required)
    })
  }

    ngOnInit(): void {

  
}

  editUser(){
    if(this.profileForm.invalid)
            return;
    this.user = {
      id: this.user.id,
      name: this.profileForm.controls["name"].value,
      login: this.profileForm.controls["login"].value,
      password: this.profileForm.controls["password"].value,
      role: this.user.role
    }
    this.userService.edit(this.user);
    this.router.navigate(["/user"])
  }

  logOut(){
    this.userService.logOut()
  }
}
