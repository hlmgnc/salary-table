import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/Employee';
import { MessageService } from 'primeng/api';
import { SelectedEmployee } from 'src/selectedEmployee';

@Component({
  selector: 'app-salary-table',
  templateUrl: './salary-table.component.html',
  styleUrls: ['./salary-table.component.scss'],
  providers: [DialogService, MessageService],
})
export class SalaryTableComponent {
  employees: Employee[] = [];
  selectedEmployee: Employee;
  cols: any[];

  display: boolean;

  constructor(
    private employeeService: EmployeeService,
    public dialogService: DialogService,
    public messageService: MessageService
  ) {}
  ref: DynamicDialogRef;

  ngOnInit() {
    this.employeeService
      .getEmployees()
      .forEach((employees) => (this.employees = employees.data));

    // this.employees = EMPLOYEES;
    this.cols = [
      { field: 'employee_name', header: 'Name' },
      { field: 'employee_salary', header: 'Salary' },
    ];
  }

  onRowReorder(event: any) {
    console.log(event);
  }

  show(employee: Employee) {
    this.ref = this.dialogService.open(SelectedEmployee, {
      header: 'Employee Details',
      width: '70%',
      contentStyle: { 'max-height': '600px', overflow: 'auto' },
      baseZIndex: 10000,
      data: employee,
    });
    console.log(employee);

    // this.ref.onClose.subscribe((employee: Employee) => {
    //   if (employee) {
    //     this.messageService.add({
    //       severity: 'info',
    //       summary: 'Employee',
    //       detail: employee.employee_name,
    //     });
    //   }
    // });
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
