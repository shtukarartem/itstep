import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User, UserService } from 'src/app/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: User = {} as User;
  constructor(private route: ActivatedRoute, private userService: UserService, router: Router) { 
  
  }



  ngOnInit(): void {
    this.userService.getById(this.route.snapshot.params["id"]).subscribe((data) =>{
      this.user = data;
    })
  }

}
