import { Component, OnInit } from '@angular/core';
import {PagesComponent} from '../pages.component';
import {ToastrService} from 'ngx-toastr';
import {UserService} from '../../../_services/_api/user.api.service';
import {TokenStorageService} from '../../../_services/token-storage.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as bootstrap from 'bootstrap';
import {MustMatch} from '../../../_helpers/must-match.validator';
import {UploadService} from '../../../_services/_api/upload.api.service';
import {LanguageService} from '../../../_services/_api/language.api.service';
import {ViewTypeService} from '../../../_services/_api/viewtype.api.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  private user: any;
  private imageURL: String;
  editUserForm: FormGroup;
  editSettingsForm: FormGroup;
  changePasswordForm: FormGroup;
  submittedEdit = false;
  submittedEditSettings = false;
  submittedPasswordChange = false;
  private languages: String[];
  private viewTypes: String[];

  constructor(private pagesComponent: PagesComponent, private toastr: ToastrService,
              private tokenStorage: TokenStorageService, private formBuilder: FormBuilder,
              private userService: UserService, private uploadService: UploadService, private languageService: LanguageService,
              private viewTypeService: ViewTypeService, private translate: TranslateService) {
    this.getData();
  }

  get e() { return this.editUserForm.controls; }
  get f() { return this.editSettingsForm.controls; }
  get g() { return this.changePasswordForm.controls; }

  async ngOnInit() {
    await this.runFormBuilders();
    await this.getUser(this.tokenStorage.getUser().id);
  }

  getData() {
    this.languageService.getAllLanguages().subscribe(response => {
        this.languages = response;
      },
      err => {
        this.toastr.error(err.error.message, 'Error!');
      });
    this.viewTypeService.getAllViewTypes().subscribe(response => {
        this.viewTypes = response;
      },
      err => {
        this.toastr.error(err.error.message, 'Error!');
      });
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
    this.editSettingsForm = this.formBuilder.group({
      language: ['', Validators.required],
      itemsPerPage: ['', Validators.required],
      viewType: ['', Validators.required]
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

  openSettingsModal(user: any) {
    this.editSettingsForm.get('language').setValue(user.userSettings.language);
    this.editSettingsForm.get('itemsPerPage').setValue(user.userSettings.items_on_page);
    this.editSettingsForm.get('viewType').setValue(user.userSettings.viewType);
    $('#editSettingsModal').modal('show');
  }

  updateSettings() {
    this.submittedEditSettings = true;
    if (this.editSettingsForm.invalid) {
      return;
    } else {
      this.userService.updateUserSettings(this.user.id, this.editSettingsForm.value).subscribe(
        response => {
          this.userService.getUser(this.user.id).subscribe(response => {
            this.tokenStorage.saveUser(response);
          }, err => {
            console.log(err);
          });
          this.toastr.success(response.message, 'Success!!');
          $('#editSettingsModal').modal('hide');
        },
        err => {
          this.toastr.error(err.error.message, 'Error!');
        }
      );
    }
    this.editSettingsForm.reset();
    this.submittedEditSettings = false;
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }
}
