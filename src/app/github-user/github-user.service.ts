import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class GithubUserService {
  constructor(private http: HttpClient) { }

  getUser(username: string) {
    return this.http.get(`https://api.github.com/users/${username}`).pipe(
      map((res: any) => ({
        name: res.name,
        photo: res.avatar_url,
        location: res.location,
        followers: res.followers,
      }))
    );
  }
}