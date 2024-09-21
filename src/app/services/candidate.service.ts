import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Candidate {
  id: number;
  email: string;
  name: string;
  password: string;
  age: number;
  bio: string;
  profilePictureUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  private apiUrl = 'http://localhost:3000/candidates'; 

  constructor(private http: HttpClient) { }

  getCandidates(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(this.apiUrl);
  }
}
