import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Coment, CommentService } from 'src/app/core';

@Injectable()
export class CommentResolverService implements Resolve<Coment[]> {

  constructor(private commentService:CommentService, route:Router) { 

  }
  resolve(route:ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.commentService.getByPost(route.params["id"]);
  }
}
