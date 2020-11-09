import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as fromSharedModels from '../../../shared/models';
import * as fromSettingsModels from '../../models';

@Component({
  selector: 'app-settings-form',
  templateUrl: './settings-form.component.html',
  styleUrls: ['./settings-form.component.scss']
})
export class SettingsFormComponent implements OnInit{
  form: FormGroup;
  @Input() isLoading: boolean;
  @Input() currentUser: fromSharedModels.CurrentUser;
  @Input() errors: fromSharedModels.BackendErrors;
  @Input() languages: fromSettingsModels.Language[];
  @Output() onSubmit: EventEmitter<fromSettingsModels.CurrentUserRequest> = new EventEmitter<fromSettingsModels.CurrentUserRequest>();
  @Output() onLogout: EventEmitter<void> = new EventEmitter<void>();
  @Output() onSelectLang: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('selectLangRef') selectLangRef: ElementRef;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      image: this.currentUser.image,
      username: this.currentUser.username,
      bio: this.currentUser.bio,
      email: this.currentUser.email,
      password: ['', Validators.required],
    });
  }

  submit(): void {
    const requestBody: fromSettingsModels.CurrentUserRequest = {
      ...this.currentUser,
      image:  this.form.get('image').value,
      username:  this.form.get('username').value,
      bio:  this.form.get('bio').value,
      email:  this.form.get('email').value,
      password:  this.form.get('password').value,
    };

    this.onSubmit.emit(requestBody);
  }

  logout(): void {
    this.onLogout.emit();
  }


  selectLang() {
    const value = this.selectLangRef.nativeElement.value;
    this.onSelectLang.emit(value);
  }
}
