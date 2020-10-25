import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as fromSharedModels from '../../../shared/models';

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
  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();
  @Output() onLogout: EventEmitter<void> = new EventEmitter<void>();

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
    this.onSubmit.emit();
  }

  logout(): void {
    this.onLogout.emit();
  }
}
