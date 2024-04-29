import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';
import { CreateUser } from './models/createUser';


@Injectable({
  providedIn: 'root'
})
export class GrudService {

  baseUrl: string = "https://localhost:7117/api/Users/"

  constructor(private http:HttpClient) { }



  getAll():Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl+'GetAll')
  }

  postData(data:CreateUser):Observable<CreateUser>{
    return this.http.post<CreateUser>(this.baseUrl+'CreateUser',data)
  }



}
