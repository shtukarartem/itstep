import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '..';
import { UserService } from '../service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private userService:UserService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

   let user: User = {} as User

   this.userService.currentUser.subscribe(
    (userData) => {
      user = userData
    }
  )
    if(user.role === "admin"){
      return true
    } else return false
  }
  
}
