import { Component, OnInit } from '@angular/core';
import {PagesComponent} from '../pages.component';
import {ToastrService} from 'ngx-toastr';
import {UserService} from '../../../_services/_api/user.api.service';
import {TokenStorageService} from '../../../_services/token-storage.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as bootstrap from 'bootstrap';
import {MustMatch} from '../../../_helpers/must-match.validator';
import {UploadService} from '../../../_services/_api/upload.api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  private user: any;
  private imageURL: String;
  editUserForm: FormGroup;
  changePasswordForm: FormGroup;
  submittedEdit = false;
  submittedPasswordChange = false;

  constructor(private pagesComponent: PagesComponent, private toastr: ToastrService,
              private tokenStorage: TokenStorageService, private formBuilder: FormBuilder,
              private userService: UserService, private uploadService: UploadService) { }

  get e() { return this.editUserForm.controls; }
  get g() { return this.changePasswordForm.controls; }

  async ngOnInit() {
    await this.runFormBuilders();
    await this.getUser(this.tokenStorage.getUser().id);
  }

  openEditModal(user: any) {
    this.editUserForm.get('name').setValue(user.name);
    this.editUserForm.get('surname').setValue(user.surname);
    this.editUserForm.get('username').setValue(user.username);
    this.editUserForm.get('email').setValue(user.email);
    this.editUserForm.get('phone').setValue(user.phone);
    this.editUserForm.get('isMod').setValue(false);
    this.editUserForm.get('isAdmin').setValue(false);
    for (const role of user.roles) {
      if (role.name === 'ROLE_ADMIN') {
        this.editUserForm.get('isAdmin').setValue(true);
      }
      if (role.name === 'ROLE_MODERATOR') {
        this.editUserForm.get('isMod').setValue(true);
      }
    }
    $('#editUserModal').modal('show');
  }

  updateUser() {
    this.submittedEdit = true;
    if (this.editUserForm.invalid) {
      return;
    } else {
      this.userService.updateUser(this.editUserForm.value).subscribe(
        response => {
          this.toastr.success(response.message, 'Success!!');
          $('#editUserModal').modal('hide');
        },
        err => {
          this.toastr.error(err.error.message, 'Error!');
        }
      );
    }
    this.editUserForm.reset();
    this.submittedEdit = false;
  }
  /* Change password */
  openChangePasswordModal(user: any) {
    this.changePasswordForm.get('username').setValue(user.username);
    $('#passwordChangeModal').modal('show');
  }

  changePassword() {
    this.submittedPasswordChange = true;
    if (this.changePasswordForm.invalid) {
      return;
    } else {
      this.userService.changePassword(this.changePasswordForm.value).subscribe(
        response => {
          this.toastr.success(response.message, 'Success!!');
          $('#passwordChangeModal').modal('hide');
        },
        err => {
          this.toastr.error(err.error.message, 'Error!');
        }
      );
    }
    this.changePasswordForm.reset();
    this.submittedPasswordChange = false;
  }


  runFormBuilders() {
    this.editUserForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', ],
      isAdmin: [, ],
      isMod: [, ]
    }, {});
    this.changePasswordForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
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

  fileSelected(event) {
    if (event.target.files[0].type.includes('image')) {
      this.onUpload(event.target.files[0]);
    } else {
      this.toastr.error('This isn\'t image file!', 'Error!');
    }
  }


  onUpload(data: any) {
    const uploadData = new FormData();
    uploadData.append('myFile', data, data.name);

    this.uploadService.uploadImage(uploadData, this.user.id).subscribe(
          response => {
            this.toastr.success(response.message, 'Success!!');
            window.location.reload();
          },
        err => {
          this.toastr.error(err.error.message, 'Error!');
        }
      );
  }
}
