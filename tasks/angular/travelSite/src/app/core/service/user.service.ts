import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from '../modele';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  currentUserId = 3;
  currentUserSubject = new BehaviorSubject<User>({} as User);
  currentUser = this.currentUserSubject.asObservable();

  isAuthSubject = new BehaviorSubject<boolean>(false);
  isAuth = this.isAuthSubject.asObservable();

  get():Observable<any>{
      return this.http.get("/api/users")
  }

  create(user:any):Observable<any>{
    return this.http.post("/api/users",
    JSON.stringify(user),
    {'headers':{'content-type':'application/json'}
  })
  }
  getCurrentId(){
    return this.currentUserId;
  }
  edit(user: any): Observable<any>{
    return this.http.put("/api/users/"+user.id,
    JSON.stringify(user),
    {'headers':{'content-type':'application/json'}
  })
}
remove(id:number):Observable<any>{
  return this.http.delete("/api,users/"+id);
}

getById(id:number):Observable<any>{
  return this.http.get("/api/users/"+id)
}

getCurentUser(){

  return this.currentUser
}

signIn(login:string, password:string){
  this.http.get(`/api/users/?login=${login}&password=${password}`).pipe(
    map(
      (users) => { console.log(users);
        if((<User[]>users).length>0){
          
          return this.currentUserSubject.next((<User[]>users)[0])
        }
      }
    )
  )

  
}

}
