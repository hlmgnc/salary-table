import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { EmployeeData } from './Employee';

@Component({
  template: `
    <div class="p-inputgroup">
      <input type="text" pInputText [(ngModel)]="employee.name" />
      <p-inputNumber [(ngModel)]="employee.salary"></p-inputNumber>
      <button type="button" pButton (click)="updateData()">Update</button>
    </div>
  `,
})
export class SelectedEmployee {
  employee: EmployeeData;

  constructor(
    private employeeService: EmployeeService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit() {
    this.employee = {
      id: this.config.data.id,
      name: this.config.data.employee_name,
      salary: this.config.data.employee_salary,
    };
  }

  updateData() {
    this.employeeService.updateEmployee(this.employee).subscribe((employee) => {
      this.ref.close(employee.data);
    });
  }
}
