import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {Type} from './type.modal';

const httpOptions={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private http:HttpClient) { }

  private typeUrl= "http://localhost:8080/hrm_system/leavetype";

  public getAllType(){
    return this.http.get<Type[]>(this.typeUrl);
  }
  
  public createType(type){
    return this.http.post<Type>(this.typeUrl,status);
  }
  
  public deleteType(type){
    return this.http.delete<Type>(this.typeUrl + "/"+ type.id);
  }
  public updateType(type){
    return this.http.put<Type>(this.typeUrl +"/"+ type.id, type);
  }
  
  

}
