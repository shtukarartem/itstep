import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.get().subscribe(
      ((data) => this.users = data)
    )
  }

  delete(id: number){

    return Boolean(this.userService.remove(id));
  }


}
