import {Component, OnDestroy, OnInit} from '@angular/core';
import { PagesComponent } from '../pages.component';
import { UserService } from '../../../_services/_api/user.api.service';
import { saveAs } from 'file-saver';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as bootstrap from 'bootstrap';
import {MustMatch} from '../../../_helpers/must-match.validator';
import {ActivatedRoute} from '@angular/router';
import {TokenStorageService} from '../../../_services/token-storage.service';
import {HttpParams} from '@angular/common/http';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  addUserForm: FormGroup;
  editUserForm: FormGroup;
  changePasswordForm: FormGroup;
  private users: any;
  private user: any;
  submittedAdd = false;
  submittedEdit = false;
  submittedPasswordChange = false;
  interval: any;
  loadedData: boolean = false;
  page = 1;
  count = 0;
  pageSize = 0;
  viewType = 'VIEW_LIST';


  constructor(private pagesComponent: PagesComponent,
              private toastr: ToastrService,
              private userService: UserService,
              private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private tokenStorage: TokenStorageService
            ) {}

  get f() { return this.addUserForm.controls; }
  get e() { return this.editUserForm.controls; }
  get g() { return this.changePasswordForm.controls; }

  async ngOnInit() {
    const user = this.tokenStorage.getUser();
    this.pageSize = user.userSettings.items_on_page;
    this.viewType = user.userSettings.viewType;
    this.retriveUsers();
    this.runFormBuilders();
    this.interval = setInterval(() => {
      this.refreshUsers();
    }, 50000);
  }

  getRequestParams(page, pageSize) {
    let params = new HttpParams();
    if (page) {
      params = params.append('page', String(page - 1));
    }
    if (pageSize) {
      params = params.append('size', pageSize);
    }
    return params;
  }

  retriveUsers() {
    this.activatedRoute.data.subscribe( value => {
        this.users = value.users.content;
        this.count = value.users.totalElements;
        this.loadedData = true;
    });
  }

  handlePageChange(event) {
    this.page = event;
    this.refreshUsers();
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

/* Add user */
  openAddModal() {
    this.addUserForm.get('name').setValue('');
    this.addUserForm.get('surname').setValue('');
    this.addUserForm.get('username').setValue('');
    this.addUserForm.get('email').setValue('');
    this.addUserForm.get('phone').setValue('');
    this.addUserForm.get('isMod').setValue(false);
    this.addUserForm.get('isAdmin').setValue(false);
    $('#addUserModal').modal('show');
  }

  addUser() {
    this.submittedAdd = true;
    if (this.addUserForm.invalid) {
      return;
    } else {
      this.userService.addUser(this.addUserForm.value).subscribe(
        response => {
          this.toastr.success(response.message, 'Success!!');
          this.refreshUsers();
          $('#addUserModal').modal('hide');
        },
        err => {
          this.toastr.error(err.error.message, 'Error!');
        }
      );
    }
    this.addUserForm.reset();
    this.submittedAdd = false;
  }
/* Update user */
  openEditModal(user: any) {
    this.editUserForm.get('name').setValue(user.name);
    this.editUserForm.get('surname').setValue(user.surname);
    this.editUserForm.get('username').setValue(user.username);
    this.editUserForm.get('email').setValue(user.email);
    this.editUserForm.get('phone').setValue(user.phone);

    this.editUserForm.get('isMod2').setValue(false);
    this.editUserForm.get('isAdmin2').setValue(false);
    for (const role of user.roles) {
      if (role.name === 'ROLE_ADMIN') {
        this.editUserForm.get('isAdmin2').setValue(true);
      }
      if (role.name === 'ROLE_MODERATOR') {
        this.editUserForm.get('isMod2').setValue(true);
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
          this.refreshUsers();
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
          this.refreshUsers();
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
/* Delete user */
  openDeleteModal(user: any) {
    this.user = user;
    $('#deleteUserModal').modal('show');
  }
  deleteRow(id: any) {
    this.userService.deleteUser(id).subscribe(
      (response) => {
        this.toastr.success(response.message, 'Success!!');
        this.refreshUsers();
        $('#deleteUserModal').modal('hide');
      },
      err => {  this.toastr.error(err.error.message, 'Error!'); }
    );
  }
/* Download PDF report */
  getReport() {
    const mediaType = 'application/pdf';
    this.userService.getReport().subscribe(
      (response) => {
        const blob = new Blob([response], { type: mediaType });
        saveAs(blob, 'user-report.pdf');
      },
      err => {  this.toastr.error(err.error.message, 'Error!'); }
    );
  }
/* Download User Data */
  refreshUsers() {
    const params = this.getRequestParams(this.page, this.pageSize);
    this.userService.getAllUsers(params).subscribe(
      response => {
        this.users = response.content;
        this.count = response.totalElements;
      },
      err => {
        this.toastr.error(err.error.message, 'Error!');
      });
  }
/* Run form builders */
  runFormBuilders() {
    this.addUserForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      isAdmin: [, ],
      isMod: [, ]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
    this.editUserForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', ],
      isAdmin2: [, ],
      isMod2: [, ]
    }, {
    });
    this.changePasswordForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  changeViewType(viewType: string) {
    this.viewType = viewType;
  }
}
