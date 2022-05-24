import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import config from 'src/config';
import { Observable } from 'rxjs';
import { Branch, Commit } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class GitHistoryService {
  constructor(private httpClient: HttpClient) {
   }

  fetchAllBranches(): Observable<Branch[]>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Basic ${config.username}:${config.token}`
      })
    };
    return this.httpClient.get<Branch[]>("https://api.github.com/repos/Hamid-Akhtar/take-home-project/branches", {
      ...httpOptions
    });
  }

  fetchAllCommits(sha: string): Observable<Commit[]>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Basic ${config.username}:${config.token}`
      })
    };
    return this.httpClient.get<Commit[]>(`https://api.github.com/repos/Hamid-Akhtar/take-home-project/commits?per_page=100&sha=${sha}`, {
      ...httpOptions
    });
  }
}
