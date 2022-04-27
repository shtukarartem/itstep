import { Component, OnInit } from '@angular/core';
import { User, UserService } from 'src/app/core';

@Component({
  selector: 'layout-headder',
  templateUrl: './headder.component.html',
  styleUrls: ['./headder.component.scss']
})
export class HeadderComponent implements OnInit {

  constructor(private userService:UserService) { 
    //this.user = userService.getCurrentUser();

  }
  isAuth:boolean = false;
  user:User = {} as User
  ngOnInit(): void {
    this.userService.currentUser.subscribe(
      (userData) => {
        this.user = userData
      }
    )
    this.userService.isAuth.subscribe(
      (isAuth) => {
        this.isAuth = isAuth;
      }
    );  
  }

}
