import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

//property

//dependecncy injection
  constructor(private api: HttpClient) { }

  //user defined fnc

  //to get all dept list 
  getdeptList(){
     //to use http rqst get- make api call to http://localhost:3000/departments
     // get()-HttpClient class HttpClientModule library
     return this.api.get('http://localhost:3000/departments')
  }

  //get single doctrs list
  viewDoctors(dtId:any){
    return this.api.get('http://localhost:3000/departments/'+dtId)
 }

}
