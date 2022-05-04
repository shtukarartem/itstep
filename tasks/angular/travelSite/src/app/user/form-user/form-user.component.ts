import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserService } from 'src/app/core';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {

  form: FormGroup;
  user: User = {} as User;

  constructor(private userService: UserService, private router: Router) { 
    this.form = new FormGroup({
        "name": new FormControl("",[Validators.required, Validators.minLength(6)]),
        "login": new FormControl("", [Validators.required, Validators.minLength(6), Validators.pattern('^[A-Z][a-zA-Z]*')]),
        "password": new FormControl("",[Validators.required, Validators.minLength(6), Validators.pattern('[a-zA-Z0-9]*')]),
        "role": new FormControl("Выберите роль",[Validators.required])  
    })
  }

  ngOnInit(): void {

  }

  addUser(){
    if(this.form.invalid)
            return;
    
    let data = {
      name: this.form.controls["name"].value,
      login: this.form.controls["login"].value,
      password: this.form.controls["password"].value,
      role: this.form.controls["role"].value
    }

    this.userService.create(data).subscribe();
    this.form.reset();
    this.router.navigate(["/user"]);

  }

}
