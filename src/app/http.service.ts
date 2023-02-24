import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  // data= new Subject<Employee>();
  // constructor(){}

  // public setData(data: Employee){
  //   console.log("data----",data);

  //   this.data.next(data);
  //   // console.log(this.data.next(data));

  // }

  // public getData(): Observable<Employee> {
  //     return this.data.asObservable();
  //   }
  constructor(private http: HttpClient) { }


  baseUrl = "http://localhost:8080/employeepayrollservice"

  getEmployeeData(): Observable<any> {
    return this.http.get(this.baseUrl + "/getAll");
  }


  addEmployeeData(body: any): Observable<any> {
    return this.http.post(this.baseUrl + "/create", body);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/get/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}