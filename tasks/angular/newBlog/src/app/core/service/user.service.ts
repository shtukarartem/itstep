import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  data: User[] = [
    {
      id:1,
      name:"вася",
      login: "admin",
      password:"12345",
      role:"admin"
    },
    {
      id:2,
      name:"петя",
      login: "user",
      password:"12345",
      role:"user"
    }
  ]
  newUserId: number = 3;
  currentUserId:number = 1;

  currentUserSubject = new BehaviorSubject<User>({} as User)
  currentUser = this.currentUserSubject.asObservable();

  isAuthSubject = new BehaviorSubject<boolean>(false);
    isAuth = this.isAuthSubject.asObservable();

  getNewUserId(){
    return this.newUserId;
  }
  getCurrentId(){
    return this.currentUserId;
  }

  getCurrentUser(){
    return this.getById(this.currentUserId)
  }

  create(user:any): Observable<any>{
     return this.http.post("/api/users",
     JSON.stringify(user),
     {'headers':{'content-type':'application/json'}
    })
  }
  get():Observable<any>{
    return this.http.get("/api/users")
  }

  remove(id:number):Observable<any>{
  
    return this.http.delete("/api,users/"+id);
  }
  getById(id: number): Observable<any>{
    return this.http.get("/api/users/"+id)
  }

  singIn(password:string,login:string){
    this.http.get(`/api/`)
     this.data.forEach((item) =>{
      if(item.login == login&& item.password == password){
         this.currentUserId = item.id
         this.currentUserSubject.next(item)
         this.isAuthSubject.next(true);
         
      }
    });
    return this.currentUserId 
  }

  signUp(user:User){
    this.create(user)
    this.currentUserId = user.id;
    this.currentUserSubject.next(user)
    this.isAuthSubject.next(true);
  }

  edit(user: User): Observable<any>{
    return this.http.put("/api/users/"+user.id,
    JSON.stringify(user),
    {'headers':{'content-type':'application/json'}
  });
     
  }
  logOut(){
    this.currentUserId = 0;
    this.currentUserSubject.next({} as User)
    this.isAuthSubject.next(false)
  }

}
