import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor( private httpClient: HttpClient) { }

  memberData(id): Observable<any>{
    return this.httpClient.get(environment.serverUrl + 'Members/' + id);
  };
};
