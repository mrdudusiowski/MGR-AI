import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../../_services/token-storage.service';
import {Router} from '@angular/router';
import {UserService} from '../../../_services/_api/user.api.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private user: any;
  private imageURL: String;

  constructor(private tokenStorage: TokenStorageService, private router: Router,
              private toastr: ToastrService, private userService: UserService) {
  }

  ngOnInit() {
    this.getUser(this.tokenStorage.getUser().id);
  }

  onSignOut() {
    this.tokenStorage.signOut();
    this.router.navigate(['login']);
  }

  private getUser(id: any) {
    this.userService.getUser(id).subscribe(
      data => {
        this.user = data;
        this.imageURL = 'data:' + this.user.imageModel.type + ';base64,' + this.user.imageModel.pic;
      },
      err => {
        this.toastr.error(err.error.message, 'Error!');
      }
    );
  }

}
