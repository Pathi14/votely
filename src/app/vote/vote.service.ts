import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { User } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  private apiUrl = 'http://localhost:3000/votes';

  constructor(private http: HttpClient) { }

  hasUserVoted(userId: string): Observable<any> {
    const url = `${this.apiUrl}?userId=${userId}`;
    return this.http.get(url);
  }

  submitVote(voteData: any) {
    return this.http.post(this.apiUrl, voteData).subscribe();
  }
  
}
