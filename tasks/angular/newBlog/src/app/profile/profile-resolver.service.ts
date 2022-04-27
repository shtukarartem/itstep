import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { User, UserService } from '../core';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolverService implements Resolve<User>{

  constructor(private userServise:UserService, route:Router) { }

  resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    return this.userServise.getById(route.params["id"])
  }
}
