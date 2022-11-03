import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Employee } from 'src/Employee';
import { EMPLOYEES } from 'src/mock-list';
import { FormComponent } from '../components/form/form.component';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'http://dummy.restapiexample.com/api/v1/employees';
  open: any;

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }
}
