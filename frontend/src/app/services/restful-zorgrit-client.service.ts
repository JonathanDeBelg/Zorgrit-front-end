import {HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class RestfulZorgritClientService {
  public constheaders = new HttpHeaders({
    'Authorization': 'cm9iaW5AaG90bWFpbC5jb20xNTU5ODIxMTMxYjcxQjZFbE91bThWaEw2cy9CakhNeDdJT05JPQ==',
    'User-Id': '2',
  });
}