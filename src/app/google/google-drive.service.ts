import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleDriveService {

  constructor(
    private http: HttpClient
  ) { }

  revisions(accessToken: string, fileId: string): Observable<any> {
    return this.http.get(
      `https://www.googleapis.com/drive/v3/files/${fileId}/revisions`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      }
    );
  }

  revision(accessToken: string, fileId: string, revisionId: string): Observable<any> {
    return this.http.get(
      `https://www.googleapis.com/drive/v3/files/${fileId}/revisions/${revisionId}`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      }
    );
  }
}
