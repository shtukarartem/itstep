import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserService } from 'src/app/core';

@Component({
  selector: 'app-editl-user',
  templateUrl: './editl-user.component.html',
  styleUrls: ['./editl-user.component.scss']
})
export class EditlUserComponent implements OnInit {

  editForm: FormGroup;
  user: User = {} as User;

  constructor(private userService: UserService, private router: Router, private route:ActivatedRoute) { 
    
    this.userService.getById(this.route.snapshot.params["id"]).subscribe(
      (data) => this.user = data
    )

    this.editForm = new FormGroup({
        "name": new FormControl(this.user.name,[Validators.required]),
        "login": new FormControl(this.user.login, [Validators.required]),
        "password": new FormControl(this.user.password,[Validators.required]),
        "role": new FormControl(this.user.role,[Validators.required])  
    })
  }

  ngOnInit(): void {

  }

  editUser(){
    if(this.editForm.invalid)
            return;
    this.user = {
      id: this.user.id,
      name: this.editForm.controls["name"].value,
      login: this.editForm.controls["login"].value,
      password: this.editForm.controls["password"].value,
      role: this.editForm.controls["role"].value,
      touts: this.user.touts
    }
    this.userService.edit(this.user).subscribe();
    this.router.navigate(["/user"])
  }

}
