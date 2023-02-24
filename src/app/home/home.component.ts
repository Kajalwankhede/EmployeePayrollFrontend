import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDto } from 'src/app/employeeDto';
import { HttpService } from 'src/app/http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  addUrl="../assets/icons/add-24px.svg"
  employeeCount: number = 0;
  employeeList: EmployeeDto[] = [];


  constructor(private httpService: HttpService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit():void{
    this.httpService.getEmployeeData().subscribe(response => {
      this.employeeList = response.data
      console.log("employee list ------",this.employeeList);
      
      this.employeeCount = this.employeeList.length
    })
  }
        
      // console.log("data1..........",data1);
      // this.employeeList.push(data1);
      // this.httpService.getData().subscribe(employee=>{
      // this.employeeList.push(employee);
      // console.log("eployeelist",this.employeeList);
      // this.employeeCount = this.employeeList.length
      
    // })
    // console.log("eployeelist",this.employeeList);
  
  updateEmployee(employee: EmployeeDto){
    console.log("id-------",employee);
    console.log("emp---",employee.employee_id);
    this.router.navigate(['editEmployee', employee.employee_id]);
  }

  deleteEmployee(employee: EmployeeDto){
    console.log("id-------",employee);
    console.log("emp---",employee.employee_id);
    this.httpService.deleteEmployee(employee.employee_id).subscribe( data => {
      console.log(data);
      this.httpService.getEmployeeData().subscribe(response => {
        this.employeeList = response.data;
        this.employeeCount = this.employeeList.length;
      })  
    })
  }

}
