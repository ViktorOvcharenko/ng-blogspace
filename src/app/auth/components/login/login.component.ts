import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as fromAuthModels from '../../models';
import * as fromSharedModels from '../../../shared/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  @Input() isLoading: boolean;
  @Input() backendErrors: fromSharedModels.BackendErrors;
  @Output() onSubmit: EventEmitter<fromAuthModels.LoginRequest> = new EventEmitter<fromAuthModels.LoginRequest>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit(): void {
    const requestBody: fromAuthModels.LoginRequest = { user: { ...this.form.value } };

    this.onSubmit.emit(requestBody);
  }
}
