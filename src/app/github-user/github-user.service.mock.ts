import { of } from 'rxjs';

export class GitHubUserServiceMock {
    getUser(username: string) {
        return of({
            name: 'Rubén Peregrina Aroca',
            photo: 'https://avatars.githubusercontent.com/u/23550574?v=4',
            location: 'Barcelona',
            followers: 15,
        });
    }
}