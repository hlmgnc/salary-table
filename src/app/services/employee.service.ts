import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee, EmployeeData } from 'src/Employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'http://dummy.restapiexample.com/api/v1';
  open: any;

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<{ data: Employee[] }> {
    return this.http.get<{ data: Employee[] }>(`${this.apiUrl}/employees`);
  }

  updateEmployee(employee: EmployeeData): Observable<{ data: EmployeeData }> {
    const url = `${this.apiUrl}/update/${employee.id}`;
    return this.http.put<{ data: EmployeeData }>(url, employee);
  }
}
