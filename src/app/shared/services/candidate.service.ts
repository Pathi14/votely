import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidate } from '../models/candidate-model';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http: HttpClient) { }

  getCandidates(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>('http://localhost:3000/candidates');
  }

  getCandidateById(id: string): Observable<Candidate> {
    return this.http.get<Candidate>(`http://localhost:3000/candidates/${id}`);
  }
}

