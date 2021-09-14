import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Employee } from '../model/Employee';


@Component({
  selector: 'list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees: Employee[] = new Array<Employee>()

  constructor(private service: AdminService, private route: ActivatedRoute, private router: Router) {
    this.route.data.subscribe(
      (data) => (this.employees = data['allEmployeeResolver'])
    );
  }

  ngOnInit(): void {
    if(!this.employees){
      this.service.listEmployee().subscribe( data => this.employees = data);
    }
  }

  addNewEmployee(){
    this.router.navigate(['../add-employee']);
  }

  // Modify Employee
  editEmployee(employee: Employee): void {
    this.router.navigate(['../edit-employee' ,employee.employeeId]);
  };
   //Delete Employee
   deleteEmployee(employee: Employee): void {
    alert('delete')
  this.service.deleteEmployee(employee.employeeId).subscribe(data=>{
    this.service.listEmployee().subscribe(data=>{
      this.employees =data
      })
    },error=>{
      alert('problem deleting employee record');
  })

}
}
