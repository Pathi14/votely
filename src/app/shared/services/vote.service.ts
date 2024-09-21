import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
