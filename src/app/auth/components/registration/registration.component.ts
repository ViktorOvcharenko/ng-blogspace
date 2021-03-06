import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as fromAuthModels from '../../models';
import * as fromSharedModels from '../../../shared/models';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  isShowPassword: boolean = false;
  @Input() isLoading: boolean;
  @Input() validationErrors: fromSharedModels.BackendErrors;
  @Output() onSubmit: EventEmitter<fromAuthModels.RegistrationRequest> = new EventEmitter<fromAuthModels.RegistrationRequest>();

  constructor(private fb: FormBuilder) { }

  get passwordType(): string {
    return this.isShowPassword ? 'text': 'password';
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submit(): void {
    const requestBody: fromAuthModels.RegistrationRequest = { user: { ...this.form.value } };
    this.onSubmit.emit(requestBody);
  }

  toggleIsShowPassword(): void {
    this.isShowPassword = !this.isShowPassword;
  }
}
