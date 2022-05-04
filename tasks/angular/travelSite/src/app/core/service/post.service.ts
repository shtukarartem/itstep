import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '..';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  get():Observable<any>{
    return this.http.get("/api/posts")
  }

  getById(id:number):Observable<any>{
    return this.http.get("/api/posts/"+id)
  }

  create(post:any){
    return this.http.post("/api/posts",
    JSON.stringify(post),
    {
      'headers':{'content-type':'application/json'}
    })
  }

  remove(post: Post):Observable<any>{
    return this.http.delete("/api,posts"+post.id);
  }



}
