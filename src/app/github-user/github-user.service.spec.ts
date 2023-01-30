import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { GithubUserService } from './github-user.service';

describe('GithubUserService', () => {
  let service: GithubUserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(GithubUserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return Github User info of @rubenperegrina', () => {
    const expectedResponse = {
      name: 'Rubén Peregrina Aroca',
      photo: 'https://avatars.githubusercontent.com/u/23550574?v=4',
      location: 'Barcelona',
      followers: 15,
    };

    const responseObject = {
      "login": "rubenperegrina",
      "id": 23550574,
      "node_id": "MDQ6VXNlcjIzNTUwNTc0",
      "avatar_url": "https://avatars.githubusercontent.com/u/23550574?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/rubenperegrina",
      "html_url": "https://github.com/rubenperegrina",
      "followers_url": "https://api.github.com/users/rubenperegrina/followers",
      "following_url": "https://api.github.com/users/rubenperegrina/following{/other_user}",
      "gists_url": "https://api.github.com/users/rubenperegrina/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/rubenperegrina/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/rubenperegrina/subscriptions",
      "organizations_url": "https://api.github.com/users/rubenperegrina/orgs",
      "repos_url": "https://api.github.com/users/rubenperegrina/repos",
      "events_url": "https://api.github.com/users/rubenperegrina/events{/privacy}",
      "received_events_url": "https://api.github.com/users/rubenperegrina/received_events",
      "type": "User",
      "site_admin": false,
      "name": "Rubén Peregrina Aroca",
      "company": null,
      "blog": "",
      "location": "Barcelona",
      "email": null,
      "hireable": null,
      "bio": "Frontend Developer 🙋🏼\u200d♂️",
      "twitter_username": null,
      "public_repos": 41,
      "public_gists": 0,
      "followers": 15,
      "following": 49,
      "created_at": "2016-11-18T08:45:15Z",
      "updated_at": "2023-01-10T18:29:01Z"
    };

    service.getUser('rubenperegrina').subscribe((res) => {
      expect(res).toEqual(expectedResponse);
    });

    const req = httpMock.expectOne(
      'https://api.github.com/users/rubenperegrina'
    );

    req.flush(responseObject);
  });
});