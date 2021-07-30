import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../../_services/auth.service';
import {TokenStorageService} from '../../../_services/token-storage.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

declare var $;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  currentYear = new Date().getFullYear();

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,
              private router: Router, private toastr: ToastrService) {}

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.router.navigate(['cpma/dashboard']);
      },
      err => {
        this.toastr.error(err.error.message, 'Error!');
        this.isLoginFailed = true;
      }
    );
  }

  ngOnInit() {
    $('body').addClass('hold-transition login-page');

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  ngOnDestroy(): void {
    $('body').removeClass('hold-transition login-page');
  }
}
