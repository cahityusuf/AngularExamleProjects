import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

interface UnsplashResponse {
  urls: {
    regular: string;
  }
}

@Injectable({
  providedIn: 'root'
})


export class PhotosService {

  //AccessKey:youXc1jqwhE7RcgmBBJ9_ywDI8Amb08_rmr1MTD9W1M
  //SecretKey:e-4AY0pXweWNDAvjweWeHuc_An_i-FYIxSBzUZMRVfw

  constructor(private http: HttpClient) { }

  getPhoto() {
    return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID youXc1jqwhE7RcgmBBJ9_ywDI8Amb08_rmr1MTD9W1M'
      }
    })
  }
}
