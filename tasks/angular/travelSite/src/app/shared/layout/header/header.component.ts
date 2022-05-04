import { Component, OnInit } from '@angular/core';
import { User, UserService } from 'src/app/core';

@Component({
  selector: 'layout-headder',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userService:UserService) { 
    //this.user = userService.getCurrentUser();

  }
  isAuth:boolean = false;
  user:User = {} as User
  ngOnInit(): void {
    /*this.userService.getCurentUser().subscribe(
      (userData) => {
        this.user = userData
      }
    )*/
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
