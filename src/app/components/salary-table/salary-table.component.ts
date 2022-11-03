import { Component, OnInit, Input } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/Employee';
import { EMPLOYEES } from 'src/mock-list';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-salary-table',
  templateUrl: './salary-table.component.html',
  styleUrls: ['./salary-table.component.scss'],
})
export class SalaryTableComponent {
  employees: Employee[] = [];
  selectedEmployee: Employee;

  cols: any[];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    // this.employeeService
    //   .getEmployees().forEach((employees) => (this.employees = employees))

    this.employees = EMPLOYEES;
    this.cols = [
      { field: 'employee_name', header: 'Name' },
      { field: 'employee_salary', header: 'Salary' },
    ];
  }

  onRowReorder(event: any) {
    console.log(event);
  }

  onUpdate(employee: Employee) {
    console.log(employee);
    
  }
}
