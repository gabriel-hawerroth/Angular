import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:3000/animals';
  private apiUrl2 = 'http://localhost:8080';

  getAllPacientes(): Observable<any[]> {
    let headers = new HttpHeaders({
      Authorization: '157c084a-af70-4a37-85a0-9dd2cb21d123',
    });
    return this.http.get<any[]>(`${this.apiUrl2}/pacientes/lista`);
  }

  remove(id: number) {
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }

  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }
}
