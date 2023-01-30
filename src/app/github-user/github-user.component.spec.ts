import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubUserComponent } from './github-user.component';
import { GithubUserService } from './github-user.service';
import { GitHubUserServiceMock } from './github-user.service.mock';

describe('GithubUserComponent', () => {
  let component: GithubUserComponent;
  let fixture: ComponentFixture<GithubUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GithubUserComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: GithubUserService, useClass: GitHubUserServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be display "No user data" on init component', () => {
    const expected = 'No user data';
    expect(component.username).toBe(expected);

    const userName = fixture.debugElement.nativeElement.querySelector('h1');
    expect(userName.innerHTML).toBe(expected);
  });

  it('should be display the UserName after click the button', () => {
    const expected = 'Rubén Peregrina Aroca';
    const btnGetUserData =
      fixture.debugElement.nativeElement.querySelector('button');
    btnGetUserData.click();
    expect(component.username).toBe(expected);
    expect(component.isButtonDisabled).toBe(true);
  });
});