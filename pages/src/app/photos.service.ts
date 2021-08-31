import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
//Access Key:youXc1jqwhE7RcgmBBJ9_ywDI8Amb08_rmr1MTD9W1M
//Secret key:e-4AY0pXweWNDAvjweWeHuc_An_i-FYIxSBzUZMRVfw
  constructor(private http: HttpClient) { }

  getPhoto(){
    return this.http.get('https://api.unsplash.com/photos/random',{
      headers:{
        Authorization:'Client-ID youXc1jqwhE7RcgmBBJ9_ywDI8Amb08_rmr1MTD9W1M'
      }
    });
  }
}
