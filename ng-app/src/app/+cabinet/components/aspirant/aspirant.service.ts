import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AspirantService {
  constructor(private _httpClient: HttpClient) {
  }

  public getSchedule(groupName: string): Observable<any> {
    return this._httpClient.get(`https://api.rozklad.org.ua/v2/groups/${groupName}/lessons`)
      .pipe(map((res: any) => {
        return res.data;
      }));
  }
}
