import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PageResult, User } from "./users.model";

@Injectable()
export class UserService {

  constructor(public http: HttpClient) {}
  
  getUsers(): Observable<PageResult<User>> {
    return this.http.get<PageResult<User>>('https://reqres.in/api/users?page=2');
  }
  
}